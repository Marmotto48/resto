const express = require("express");
const router = express.Router();
const { create } = require("../controller/reservation");

router.post("/", create);

module.exports = router;
