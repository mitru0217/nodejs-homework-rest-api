const createError = require("http-errors");

const { Contact } = require("../../models");

const filteredContacts = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id });
  let favoriteObj = null; // искомый объект

  contacts.data.result.forEach((obj) => {
    if (obj.favorite) {
      // если значение свойства "favorite" равно true
      favoriteObj = obj; // сохраняем этот объект
    }
  });
  res.json({
    status: "success",
    code: 200,
    data: {
      favoriteObj,
    },
  });
};

module.exports = filteredContacts;
