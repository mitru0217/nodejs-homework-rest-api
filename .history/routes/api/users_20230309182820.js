const express = require("express");

const { users: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const { auth, upload } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { validationBody } = require("../../middlewares");

const router = express.Router();
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
router.patch("/:id", auth, ctrlWrapper(ctrl.updateSubscription));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post(
  "/verify",
  validationBody(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendVerifyEmail)
);
module.exports = router;
