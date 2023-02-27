const createError = require("http-errors");
const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { id } = req.params;

  const result = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(400, "missing field subscription");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateSubscription;
