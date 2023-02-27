const { Conflict } = require("http-errors");

const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const result = await User.create({ name, email, password, subscription });

  res.status(201).json({
    status: "succses",
    code: 201,
    data: {
      user: {
        email,
        name,
        subscription,
      },
    },
  });
};

module.exports = register;
