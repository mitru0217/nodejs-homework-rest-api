const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
// const {joiSchema, statusJoiSchema} = require("../../models/product");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

router.post("/", ctrlWrapper(ctrl.add));
// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router;
