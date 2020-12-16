const express = require("express");
const hrController = require("../controllers/employees");

const router = express.Router();

router.get("/get_employees", hrController.getEmployees);
router.post("/get_employees_paged", hrController.getEmployeesPaged);
router.post("/find_employee_detail", hrController.postEmployeeFindDetail);
router.post("/find_employee", hrController.postEmployeeFind);
router.post("/find_pages_amount", hrController.findPagesAmount); //Finds amount of pages in database
router.post("/from_address", hrController.postFromAddress);

module.exports = router;
