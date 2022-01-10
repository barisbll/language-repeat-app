const User = require("../models/user");
const Sentence = require("../models/sentence");
const addErrorStatusCode = require("../util/addErrorStatusCode");

const userId = 1;

exports.getRepetitionList = (req, res, next) => {
  User.getRepetitionList(userId, null)
    .then(([row, fieldData]) => {
      if (row.length < 1) {
        const err = new Error("No sentence found for that user");
        err.statusCode = 404;
        throw err;
      }

      res.json({
        message: "Successfully fetched users repeated sentences",
        data: row,
      });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.postMarkRepetition = (req, res, next) => {
  const sentenceId = req.body.sentenceId;

  Sentence.markRepetition(sentenceId, null)
    .then((result) => {
      if (!result) {
        const err = new Error("No sentence found for that user");
        err.statusCode = 404;
        throw err;
      }
      return res
        .status(200)
        .json({ message: "Successfully marked repetiition" });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.postMarkError = (req, res, next) => {
  const sentenceId = req.body.sentenceId;

  Sentence.markError(sentenceId, null)
    .then((result) => {
      if (!result) {
        const err = new Error("No sentence found for that user");
        err.statusCode = 404;
        throw err;
      }
      console.log(result);
      return res.status(200).json({ message: "Successfully marked error" });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.getErrorsList = (req, res, next) => {
  Sentence.seeErrors(userId)
    .then(([rows, fieldData]) => {
      return res
        .status(200)
        .json({ message: "Successfully fetched errors list", data: rows });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};
