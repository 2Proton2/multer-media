const express = require("express");
const router = express.Router();
const multerMiddleware = require("../middleware/multer.middleware.js");
const employeeController = require("../controller/employee.controller.js");
const { upload } = require("../utils/storageManager.js");

router.route("/upload").post(
    // privateStorage.single("image"),
    upload.single("image"),
    employeeController.uploadController
);

module.exports = router;