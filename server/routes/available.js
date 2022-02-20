var express = require("express");
var router = express.Router();
const { create } = require("../controller/available");

router.post("/", create);

module.exports = router;
