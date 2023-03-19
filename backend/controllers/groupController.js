const Group = require("../models/groupModel");

const addGroup = async (req, res) => {
  const newGroup = await new Group(req.body);
  newGroup
    .save()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json({ msg: err.message }));
};

const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getTeacherGroups = async (req, res) => {
  try{
    const groups = await Group.find({teacherId: req.params.id})
    res.status(200).json(groups);
    console.log(req.params.id);
  }catch(err){
    res.status(400).json({ error: err.message });
  }
}



module.exports = { addGroup,getAllGroups,getTeacherGroups};
