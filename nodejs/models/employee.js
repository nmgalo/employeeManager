const rootDirectory = require("../utility/directory");
const sql = require("../utility/sql");

module.exports = class Employee {
  constructor(firstName, lastName, pid, image, gender, address, personStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pid = pid;
    this.image = image;
    this.gender = gender;
    this.personStatus = personStatus;
  }

  static findEmployee(fname, lname) {
    return sql.execute(
      "SELECT * FROM `citizens` WHERE first_name=? AND last_name=?",
      [fname, lname]
    );
  }

  static findEmployeeDetail(fname, lname, dob, gender) {
    return sql.execute(
      "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND date_of_birth=? AND gender=?",
      [fname, lname, dob, gender]
    );
  }
};
