module.exports = addErrorStatusCode = (err) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
};
