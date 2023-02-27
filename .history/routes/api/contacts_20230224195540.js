const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const { auth, validationBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  auth,
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);

router.put(
  "/:id",
  isValidId,
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validationBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
