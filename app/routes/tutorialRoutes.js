const express = require("express");
const router = new express.Router();
const tutorials = require("../controllers/tutorialControllers");

router.post("/", tutorials.createTut);

router.get("/", tutorials.findAllTuts);

router.get("/:id", tutorials.findOneTut);

router.put("/:id", tutorials.updateTut);

router.delete("/:id", tutorials.deleteOneTut);

router.delete("/", tutorials.deleteAllTuts);

module.exports = router;
