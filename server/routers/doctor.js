const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

router.post("/login", jsonParser, userController.doctorLogin);
router.post("/getdoctors", jsonParser, userController.getDoctors);

module.exports = router;