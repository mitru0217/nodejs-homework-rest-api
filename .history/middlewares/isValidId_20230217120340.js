const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = RequestError(400, `${id} is not correct id format`);
    next(error);
  }
  next();
};

module.exports = isValidId;
