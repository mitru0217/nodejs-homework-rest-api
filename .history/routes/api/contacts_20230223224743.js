const express = require("express");

// const ctrl = require("../../controllers/contacts");
const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const { validationBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));
router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validationBody(schemas.addSchema), ctrlWrapper(ctrl.add));
router.post("/", validationBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  "/:id",
  isValidId,
  validationBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
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
