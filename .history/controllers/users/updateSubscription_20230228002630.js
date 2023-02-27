const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { id } = req.params;
  if (!["starter", "pro", "business"].includes(subscription)) {
    return res.status(400).json({ message: "Invalid subscription type" });
  }
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      id,
      subscription,
    },
  });
};

module.exports = updateSubscription;
