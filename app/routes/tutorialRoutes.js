const express = require("express");
const router = new express.Router();
const tutorials = require("../controllers/tutorialControllers");

router.post("/", tutorials.createTut);

module.exports = router;
