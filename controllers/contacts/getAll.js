<<<<<<< HEAD
const contactsOperations = require("../../models/contacts");

const getAll = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
=======
const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt, -updatedAt");
>>>>>>> 5e59bc1 (done)
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
