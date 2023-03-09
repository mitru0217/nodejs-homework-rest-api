const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { User } = require("../../models");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const email = {
  to: "email",
  // from: "mitru0217@meta.ua",
  subject: "Подтверждение email",
  html: "<p>The </p>",
};

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const verificationToken = uuidv4();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarUrl = gravatar.url(email, { s: "250" }, true);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarUrl,
    verificationToken,
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
