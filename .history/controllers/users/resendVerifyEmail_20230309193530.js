const { RequestError, sendEmail } = require("../../helpers");

const { User } = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "Not Found");
  }
  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  const mailMessage = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Подтвердите email </a>`,
  };
  await sendEmail(mailMessage);
};

module.exports = resendVerifyEmail;
