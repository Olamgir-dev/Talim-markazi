const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const teacherRouter = require("./routes/teacherRouter");
const student = require("./routes/studentRouter");
const groupRouter  = require('./routes/groupRouter')
const examRouter  = require('./routes/examRouter');
const questionRouter  = require('./routes/questionRouter');

dotenv.config();


// Muhim malumotlarni env dan olib olish

const port = process.env.PORT || 5001;

const url = process.env.MONGO_URL;

// MiddelWare
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});
app.use(express.json());
app.use(cors());

// APIs
app.use("/student", student);
app.use("/teachers", teacherRouter);
app.use('/group', groupRouter)
app.use('/exam', examRouter)
app.use('/questions', questionRouter)

mongoose
  .connect(url)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server ${port} portda ishga tushdi va MongoDB ga ulandi`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
