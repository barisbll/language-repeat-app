const express = require("express");

const repeatController = require("../controllers/repeat");

const router = express.Router();

router.get("/repeat", repeatController.getRepetitionList);

router.post("/postMarkRepetition", repeatController.postMarkRepetition);

router.post("/postMarkError", repeatController.postMarkError);

router.get("/getErrors", repeatController.getErrorsList);

module.exports = router;
