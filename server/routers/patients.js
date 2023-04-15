const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()


router.post("/register", jsonParser, userController.registerDoctor);
router.post("/login", jsonParser, userController.userLogin);


module.exports = router;