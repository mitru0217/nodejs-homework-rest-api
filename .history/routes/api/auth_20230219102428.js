const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validationBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
