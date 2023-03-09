const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { User } = require("../../models");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarUrl = gravatar.url(email, { s: "250" }, true);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarUrl,
  });

  res.status(201).json({
    status: "succses",
    code: 201,
    user: {
      result,
    },
  });
};

module.exports = register;
