const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const { validationBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
