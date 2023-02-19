const express = require("express");
const ctrl = require("../../controllers/auth/register");
const { ctrlWrapper } = require("../../helpers");

// const { auth: ctrl } = require("../../controllers");
const { validationBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
