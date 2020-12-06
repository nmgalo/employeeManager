const express = require("express");
const hrController = require("../controllers/employees");

const router = express.Router();

router.get("/get_employees", hrController.getEmployees);
router.post("/get_employees_paged", hrController.getEmployeesPaged);
router.post("/find_employee", hrController.postEmployeeFind);
router.post("/find_employee_detail", hrController.postEmployeeFindDetail);

module.exports = router;
