const express = require("express");
const router = express.Router();
const userController = require("../controllers/usercontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()


router.post("/register", jsonParser, userController.registerUser);
router.post("/login", jsonParser, userController.userLogin);
router.post("/getMedicines", jsonParser, userController.getMedicines);
router.post("/getDiseases", jsonParser, userController.getDiseases);

module.exports = router;