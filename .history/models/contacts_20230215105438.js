const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");

const contactsPath = require("./filePath");

const update = async (date) => {
  await fs.writeFile(contactsPath, JSON.stringify(date));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => (contact.id = id));
  if (!result) {
    return null;
  }
  return result;
};
const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((contact) => (contact.id = id));
    if (idx === -1) {
      return null;
    }
    const [removeContact] = contacts.splice(idx, 1);
    await update(contacts);
    return removeContact;
  } catch (e) {
    console.log("Somthing wrong");
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = { ...body, id: uuidv4() };
    contacts.push(newContact);
    await update(contacts);
    return newContact;
  } catch (error) {
    console.log("Somthing wrong");
  }
};

const updateContactById = async (id, body) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    contacts[idx] = { ...body, id };
    await update(contacts);
    return contacts[idx];
  } catch (error) {
    console.log("Somthing wrong");
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
