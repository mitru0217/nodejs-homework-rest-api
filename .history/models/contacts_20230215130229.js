const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");

const contactsPath = require("./filePath");

const updateContacts = async (date) => {
  await fs.writeFile(contactsPath, JSON.stringify(date));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: uuidv4() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateContactById = async (id, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...body, id };
  await updateContacts(contacts);
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
