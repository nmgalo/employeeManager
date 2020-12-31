const express = require("express");
const hrController = require("../controllers/employees");
const faceController = require("../controllers/faceRecognition");

const router = express.Router();

router.get("/get_employees", hrController.getEmployees);
router.post("/get_employees_paged", hrController.getEmployeesPaged);
router.post("/find_employee_detail", hrController.postEmployeeFindDetail);
router.post("/find_employee", hrController.postEmployeeFind);
router.post("/find_employee_v2", hrController.postEmployeeFindV2);
router.post("/find_pages_amount", hrController.findPagesAmount); //Finds amount of pages in database
router.post("/from_address", hrController.postFromAddress);
router.post("/find_from_all", hrController.findFromAll);
router.post("/find_with_pid", hrController.findWithPid);
router.post("/face_recognition", faceController.faceRecognition);
router.post("/faceupload", faceController.imageUpload);
router.use("/faceimages/:fileName", faceController.imageServe);
module.exports = router;
