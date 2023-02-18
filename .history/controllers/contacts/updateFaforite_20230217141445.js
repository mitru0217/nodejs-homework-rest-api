const createError = require("http-errors");

const { Contact } = require("../../models");

const updateFaforite = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await Contact.findByIdAndUpdate(id, { status }, { new: true });
  if (!result) {
    throw createError(400, "missing field favorite");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateFaforite;
