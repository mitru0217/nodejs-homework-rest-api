const express = require("express");
// const { auth: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const { register } = require("../../controllers/auth");
const { validationBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

// const { Conflict } = require("http-errors");

// const { User } = require("../../models");

// const register = async (req, res) => {
//   const { email, password, subscription } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw new Conflict(`User with ${email} already exist`);
//   }
//   const result = await User.create({ email, password, subscription });

//   res.status(201).json({
//     status: "succses",
//     code: 201,
//     user: {
//       // email,
//       // subscription,
//       result,
//     },
//   });
// };

const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(register)
);

module.exports = router;
