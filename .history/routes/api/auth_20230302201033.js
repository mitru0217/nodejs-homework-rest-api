const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const { auth, validationBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);
router.post(
  "/login",
  validationBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
