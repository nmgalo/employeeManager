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

  static findEmployeeDetail(fname, lname, dob, gender, region) {
    console.log("Test length: " + gender.length);
    // Everything below this is :( will fix later

    if (dob.length == 0 && gender.length == 0 && region.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=?",
        [fname, lname]
      );
    }
    if (dob.length == 0 && gender.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND region=?",
        [fname, lname, region]
      );
    }
    if (dob.length == 0 && region.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND gender=?",
        [fname, lname, gender]
      );
    }
    if (gender.length == 0 && region.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=?",
        [fname, lname, dob]
      );
    }
    if (gender.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND region=?",
        [fname, lname, dob, region]
      );
    }
    if (region.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND gender=?",
        [fname, lname, dob, gender]
      );
    }
    if (dob.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND gender=? AND region=?",
        [fname, lname, gender, region]
      );
    }
    if (gender.length == 0) {
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND region=?",
        [fname, lname, dob, region]
      );
    }

    return sql.execute(
      "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND gender=? AND region=?",
      [fname, lname, dob, gender, region]
    );
  }
};
