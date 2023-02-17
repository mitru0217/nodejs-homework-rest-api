const { isValidObjectId } = require("mongoose");
const { RequestError } = require("../helpers");
const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = RequestError(400, `${id} is not correct id format`);
    next(error);
  }
  next();
};

module.exports = isValidId;
