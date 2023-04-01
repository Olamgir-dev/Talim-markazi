const Student = require("../models/studentModel");
const Image = require("../models/imageModel");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const imageModel = require("../models/imageModel");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage, limits: {
    fieldSize: 1024 * 1024 * 5
  }
}).single("photo");

const editPhoto = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new imageModel({
        userId: req.params.id,
        photo: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
      });
      newImage
        .save()
        .then(() => res.json(newImage))
        .catch((err) => console.log(err));
    }
  });
};

// const getAllImages = async (req, res) => {
//   try {
//     const images = await Image.find();
//     imagesData = await images.map(image => {
//       const photoData = image.photo.data;
//       const imageUrl = "http:/localhost:5001/uploads/" + photoData;
//       return { userId: image.userId, imageUrl };
//     })
//     res.status(200).json(imagesData);
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// }

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const addStudent = async (req, res) => {
  try {
    const newStudent = await Student.addStudent(req);
    res.status(200).json(newStudent);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const joinGroup = async (req, res) => {
  const { studentId, groupId } = req.body;
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { _id: studentId },
      { groupId },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// student login
const login = async (req, res) => {
  try {
    const student = await Student.login(req);
    console.log(student);
    const token = createToken(student._id);

    res.status(200).json({ student: student, token: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};
const studentDelete = async (req, res) => {
  const studentId = req.params.id;
  Student.deleteOne({ _id: studentId },)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err.message });
    });
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

//talaba proflini uzgartirish 
const updatedStudent = async (req, res) => {
  const { firstname, lastname, studentId } = req.body;
  try {
    const updateStudent = Student.findByIdAndUpdate(
      { _id: studentId },
      { firstname, lastname },
      { new: true }
    )
    res.status(200).json(updateStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudentProfle =async (req, res) => {
  const { id } = req.params;
  try{
    const student = await Student.findOne({_id:id});
    const image = await Image.findOne({userId:id});
    const photoData = image.photo.data;
    const imageUrl = "http:/localhost:5001/uploads/" + photoData;
    const studentProfle = await {
       student,
       imageUrl
    }
     res.status(200).json(studentProfle)
  } catch (err) {
    res.status(404).json({msg: err.message})
  }
};

module.exports = { login, addStudent, joinGroup, studentDelete, getAllStudents, updatedStudent, editPhoto, getStudentProfle };

