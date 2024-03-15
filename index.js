const express = require("express");
const app = express();
const getStudentRouter = require("./routes/getStudents.js");
const getAllStudentGradeRouter = require("./routes/getAllStudentsGrade.js");
const getmeRoute = require("./routes/getMe.js");
const authorize = require("./middlewares/auth.js");

port = process.env.PORT || 2000;

app.use(express.json());

app.use("/getme/:id", getmeRoute);
app.use("/getstudents", getStudentRouter);

// only admin and director can access this route
app.use(
  "/getallstudentsgrade/:role",
  authorize(["admin", "director"]),
  getAllStudentGradeRouter
);

app.listen(port, (err, res) => {
  if (err) throw err;
  console.log("Server is Runing...");
});
