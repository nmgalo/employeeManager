const Employee = require("../models/employee");
const tr = require("transliteration").transliterate;
var translit = require("translitit-latin-to-mkhedruli-georgian");

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
  fname = fname.replace(/ჭ/g, "W");
  fname = fname.replace(/შ/g, "S");
  fname = fname.replace(/ძ/g, "Z");
  fname = fname.replace(/თ/g, "t");
  fname = fname.replace(/ც/g, "c");
  lname = lname.replace(/ჭ/g, "W");
  lname = lname.replace(/შ/g, "S");
  lname = lname.replace(/ძ/g, "Z");
  lname = lname.replace(/თ/g, "t");
  lname = lname.replace(/ც/g, "c");
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
  lname = lname.replace(/S/g, "შ");
  lname = lname.replace(/Z/g, "ძ");
  lname = lname.replace(/W/g, "წ");
  lname = lname.replace(/T/g, "თ");
  lname = lname.replace(/c/g, "ც");

  console.log(translit(lname));
  console.log(pid);
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
