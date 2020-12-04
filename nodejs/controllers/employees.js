const Employee = require("../models/employee");
const sql = require("../utility/sql");

exports.postEmployeeFind = (req, res, next) => {
  const fname = req.body.fname;
  const lname = req.body.lname;

  console.log(fname);
  console.log(lname);

  Item.findEmployee(fname, lname)
    .then(([person, bufData]) => {
      console.log(person);
      res.send({ some: person });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEmployeeFindDetail = (req, res, next) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const dob = req.body.dob;
  const gender = req.body.gender;
};
