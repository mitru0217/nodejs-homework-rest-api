const { Conflict } = require("http-errors");

const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const result = await User.create({ name, email, password });
  console.log(result);
  res.status(201).json({
    status: "succses",
    code: 201,
    data: {
      user: {
        email: result.email,
        name: result.name,
      },
    },
  });
};

module.exports = register;
