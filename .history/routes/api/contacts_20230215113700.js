const express = require("express");
const createError = require("http-errors");
const Joi = require("joi");
const contactsOperations = require("../../models/contacts");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }

  next();
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.getContactById(id);
    if (!result) {
      throw createError(404, `Product with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw createError(400, "missing required name field");
    }
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
