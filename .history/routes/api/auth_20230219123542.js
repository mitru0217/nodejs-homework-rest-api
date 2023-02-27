const express = require("express");
// const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { register } = require("../../controllers/auth");
// const { auth: ctrl } = require("../../controllers");
const { validationBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(register)
);

module.exports = router;
