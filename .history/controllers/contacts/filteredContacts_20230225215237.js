const createError = require("http-errors");

const { Contact } = require("../../models");

const filteredContacts = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id });
  const result = contacts.filter;
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = filteredContacts;
