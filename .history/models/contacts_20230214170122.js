const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const update = async (date) => {
  await fs.writeFile(contactsPath, JSON.stringify(date));
};

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (e) {
    console.log("Somthing wrong");
  }
};

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((contact) => (contact.id = id));
    if (!result) {
      return null;
    }
    return result;
  } catch (e) {
    console.log("Somthing wrong");
  }
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
