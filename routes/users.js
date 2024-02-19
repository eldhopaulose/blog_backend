var express = require("express");
const { userLogin, userSignup } = require("../controllers/user");
var router = express.Router();

/* GET users listing. */
router.post("/login", userLogin);
router.post("/signup", userSignup);

module.exports = router;
