const createError = require("http-errors");

const contactsOperations = require("../../models/contacts");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.updateContactById(id, req.body);
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

module.exports = updateById;
