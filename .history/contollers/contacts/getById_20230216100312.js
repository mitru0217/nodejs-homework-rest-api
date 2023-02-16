const createError = require("http-errors");

const contactsOperations = require("../../models/contacts");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.getContactById(id);
  if (!result) {
    throw createError(404, `Not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
