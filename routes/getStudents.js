const express = require("express");
const router = express.Router();

const datas = require("../data.json");

// to convert object to string
const stringData = JSON.stringify(datas.students);
//  to convert text into a JavaScript object
const DataObject = JSON.parse(stringData);

router.get("/", (req, res) => {
  res.send(
    datas.students
      .map(
        (eachData) =>
          ` <p> &nbsp;&nbsp;${eachData.id}&nbsp;&nbsp; ${eachData.name} </p> `
      )
      .join("")
  );
  res.end();
});

module.exports = router;
