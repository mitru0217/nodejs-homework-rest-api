const express = require("express");
const { users: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const { auth } = require("../../middlewares");

const router = express.Router();
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/:id", auth, ctrlWrapper(ctrl.updateSubscription));
module.exports = router;
