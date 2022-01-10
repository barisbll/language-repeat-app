const User = require("../models/user");
const addErrorStatusCode = require("../util/addErrorStatusCode");

const userId = 1;

exports.getUser = (req, res, next) => {
  User.findById(userId, null)
    .then(([row, fieldData]) => {
      res
        .status(200)
        .json({ message: "User data fetched successfully", data: row[0] });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.getItems = (req, res, next) => {
  User.seeUserItems(userId, null)
    .then(([row, fieldData]) => {
      res.status(200).json({
        message: "User items data fetched successfully",
        data: row,
      });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.getAnimals = (req, res, next) => {
  User.seeAnimals(userId, null)
    .then(([row, fieldData]) => {
      res
        .status(200)
        .json({ message: "Animal data fetched successfully", data: row });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.getMounts = (req, res, next) => {
  User.seeMounts(userId, null)
    .then(([row, fieldData]) => {
      res
        .status(200)
        .json({ message: "Mounts data fetched successfully", data: row });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};

exports.getClans = (req, res, next) => {
  User.seeClans(userId, null)
    .then(([row, fieldData]) => {
      res
        .status(200)
        .json({ message: "Clans data fetched successfully", data: row });
    })
    .catch((err) => {
      addErrorStatusCode(err);
      next(err);
    });
};
