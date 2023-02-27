const { Contact } = require("../../models");

const add = async (req, res) => {
  const { _id, email } = req.user;
  const result = await Contact.create({ ...req.body, owner: { _id, email } });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
