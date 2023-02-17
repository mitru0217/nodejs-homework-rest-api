const express = require("express");

const ctrl = require("../../controllers/books");

const { ctrlWrapper } = require("../../helpers");

const { validationBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/book");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validationBody(schemas.addSchema), ctrlWrapper(ctrl.add));
// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router;
