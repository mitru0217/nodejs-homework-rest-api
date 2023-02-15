const express = require("express");
const createError = require("http-errors");

const { validation, ctrlWrapper } = require("../../middlewares");
const { productSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(productSchema);

const contactsOperations = require("../../models/contacts");

const router = express.Router();

// router.get("/", async (req, res, next) => {
//   try {
//     const contacts = await contactsOperations.listContacts();
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result: contacts,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", async (req, res, next) => {
  try {
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

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw createError(400, "missing fields");
    }
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
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.removeContact(id);
    if (!result) {
      throw createError(404, `Not found`);
    }

    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
