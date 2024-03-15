const express = require("express");
const router = express.Router();
const datas = require("../data.json");

router.get("/", (req, res) => {
  res.send(
    datas.students
      .map(
        (eachStudent) =>
          `<p> &nbsp;&nbsp;${eachStudent.id} &nbsp;&nbsp;${eachStudent.name}&nbsp;&nbsp; ${eachStudent.grade}</p>`
      )
      .join("")
  );
});

module.exports = router;
