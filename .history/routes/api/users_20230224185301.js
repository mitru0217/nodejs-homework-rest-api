const express = require("express");
const { users: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const { auth } = require("../../middlewares");

const router = express.Router();
router.get("/current", ctrlWrapper(auth), ctrlWrapper(ctrl.getCurrent));

module.exports = router;
