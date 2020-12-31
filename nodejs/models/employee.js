const sql = require("../utility/sql");

module.exports = class Employee {
  constructor(firstName, lastName, pid, image, gender, address, personStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pid = pid;
    this.image = image;
    this.gender = gender;
    this.address = address;
    this.personStatus = personStatus;
  }

  static findEmployee(fname, lname) {
    return sql.execute(
      "SELECT * FROM `citizens` WHERE first_name=? AND last_name=?",
      [fname, lname]
    );
  }

  static findEmployeeV2(fname, lname, onPageAmount, pages) {
    let start = parseInt(pages - 1) * onPageAmount;
    return sql.execute(
      "SELECT * FROM citizens WHERE first_name=? AND last_name=? LIMIT ?, ?",
      [fname, lname, start, onPageAmount]
    );
  }

  static findEmployeesAmount(fname, lname) {
    return sql.execute(
      "SELECT COUNT(*) AS 'result' FROM `citizens` WHERE first_name=? AND last_name=?",
      [fname, lname]
    );
  }

  static findFromAll(fname, lname) {
    return sql.execute(
      "SELECT * FROM `allcitizens` WHERE first_name=? AND last_name=?",
      [fname, lname]
    );
  }

  static findPagesAmount() {
    return sql.execute("SELECT COUNT(*) as Amount FROM citizens");
  }

  static fromAddress(address) {
    return sql.execute("SELECT * FROM `citizens` WHERE living_place=?", [
      address,
    ]);
  }

  static findWithPid(pid, lname) {
    return sql.execute(
      "SELECT * FROM `citizens` WHERE last_name=? AND private_number=?",
      [lname, pid]
    );
  }

  static getEmployees() {
    return sql.execute("SELECT * FROM `citizens` LIMIT 2");
  }

  static getEmployeesPaged(page) {
    //First page going to show me 20 entries (Limit 0 20)
    //Second page going to show me 20 entries (Limit 20 40)

    let onPageAmount = 10;
    let start = parseInt(page + 1) * 10;
    return sql.execute("SELECT * FROM `citizens` LIMIT ?, ?", [
      start,
      onPageAmount,
    ]);
  }

  static findEmployeeDetail(fname, lname, dob, gender, region) {
    gender = "%" + gender + "%";
    region = "%" + region + "%";

    if (dob) {
      dob = new Date(`${dob}-01-01`).getTime();
      return sql.execute(
        "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND birth_date > ? AND gender LIKE ? AND region LIKE ?",
        [fname, lname, dob, gender, region]
      );
    }
    return sql.execute(
      "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND gender LIKE ? AND region LIKE ?",
      [fname, lname, gender, region]
    );

    //Ackchuallly below code is faster in terms of querying database so I'll leave the code commented out.

    // if (dob.length == 0 && gender.length == 0 && region.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=?",
    //     [fname, lname]
    //   );
    // }
    // if (dob.length == 0 && gender.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND region=?",
    //     [fname, lname, region]
    //   );
    // }
    // if (dob.length == 0 && region.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND gender=?",
    //     [fname, lname, gender]
    //   );
    // }
    // if (gender.length == 0 && region.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=?",
    //     [fname, lname, dob]
    //   );
    // }
    // if (gender.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND region=?",
    //     [fname, lname, dob, region]
    //   );
    // }
    // if (region.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND gender=?",
    //     [fname, lname, dob, gender]
    //   );
    // }
    // if (dob.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND gender=? AND region=?",
    //     [fname, lname, gender, region]
    //   );
    // }
    // if (gender.length == 0) {
    //   return sql.execute(
    //     "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND region=?",
    //     [fname, lname, dob, region]
    //   );
    // }

    // return sql.execute(
    //   "SELECT * FROM `citizens` WHERE first_name=? AND last_name=? AND dob=? AND gender=? AND region=?",
    //   [fname, lname, dob, gender, region]
    // );
  }
};
