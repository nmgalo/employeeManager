const Employee = require("../models/employee");
const sql = require("../utility/sql");

exports.postEmployeeFind = (req, res, next) => {
  const fname = req.body.fname;
  const lname = req.body.lname;

  console.log(fname);
  console.log(lname);

  Employee.findEmployee(fname, lname)
    .then(([person, bufData]) => {
      console.log(person);
      res.send(person);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEmployees = (req, res, next) => {
  Employee.getEmployees()
    .then(([people, bufData]) => {
      console.log(people);
      res.send(people);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEmployeesPaged = (req, res, next) => {
  const page = req.body.page;
  Employee.getEmployeesPaged(page)
    .then(([people, bufData]) => {
      res.send(people);
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
  const region = req.body.region;

  console.log(req.body);
  Employee.findEmployeeDetail(fname, lname, dob, gender, region)
    .then(([result, bufData]) => {
      {
        result[0] ? console.log("Success") : console.log("Fail");
      }
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
