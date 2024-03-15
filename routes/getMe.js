const express = require("express");
const router = express.Router();
const datas = require("../data.json");

function userId(req, res) {
  const matchedData = datas.students.filter((data) => req.params.id == data.id);
  if (matchedData.length > 0) {
    // responding  id name and grade in html format
    res.send(
      matchedData
        .map(
          (
            eachData
          ) => `<p>&nbsp;&nbsp;ID&nbsp;&nbsp;NAME&nbsp;&nbsp;GRADE  </p> 
            <p>&nbsp;&nbsp;${eachData.id}&nbsp;&nbsp; ${eachData.name} &nbsp;&nbsp; ${eachData.grade}  </p> `
        )
        .join("")
    );
  } else {
    res.send("Sorry No Such Student");
  }

  res.end();
}

// if you want to export more function you can use this { , , }
module.exports = userId;
