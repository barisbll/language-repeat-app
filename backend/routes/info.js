const express = require("express");

const infoController = require("../controllers/info");

const router = express.Router();

router.get("/user", infoController.getUser);

router.get("/animals", infoController.getAnimals);

router.get("/items", infoController.getItems);

router.get("/mounts", infoController.getMounts);

router.get("/clans", infoController.getClans);

module.exports = router;
