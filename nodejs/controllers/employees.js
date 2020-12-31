const Employee = require("../models/employee");
const tr = require("transliteration").transliterate;
var translit = require("translitit-latin-to-mkhedruli-georgian");
const translitSpecial = require("../utility/translit");

exports.postEmployeeFind = (req, res, next) => {
  const fname = req.body.fname;
  const lname = req.body.lname;

  Employee.findEmployee(fname, lname)
    .then(([person, bufData]) => {
      res.send(person);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEmployeeFindV2 = (req, res, next) => {
  const fname = req.body.first_name;
  const lname = req.body.last_name;
  const onPage = req.body.limit;
  const pages = req.body.page;

  Employee.findEmployeeV2(fname, lname, onPage, pages)
    .then(([person, bufData]) => {
      Employee.findEmployeesAmount(fname, lname).then(
        ([resultCount, bufData]) => {
          res.send({ resultCount: resultCount[0].result, results: person });
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findPagesAmount = (req, res, next) => {
  const amountOnPage = parseInt(req.body.amount_on_page);
  let amountOfPages = 0;
  Employee.findPagesAmount()
    .then(([result, bufData]) => {
      amountOfPages = result[0].Amount / amountOnPage;
      res.send(`${amountOfPages}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findFromAll = (req, res, next) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  fname = translitSpecial.translitSpecial2(fname);
  lname = translitSpecial.translitSpecial2(lname);

  Employee.findFromAll(tr(fname), tr(lname))
    .then(([result, bufData]) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postFromAddress = (req, res, next) => {
  let address = req.body.address;
  Employee.fromAddress(address)
    .then(([result, bufData]) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findWithPid = (req, res, next) => {
  lname = req.body.lname;
  pid = req.body.pid;
  lname = translitSpecial.translitSpecial(lname);

  Employee.findWithPid(pid, translit(lname))
    .then(([result, bufData]) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEmployees = (req, res, next) => {
  Employee.getEmployees()
    .then(([people, bufData]) => {
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
