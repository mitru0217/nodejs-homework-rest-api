const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "mitru0217@gmail.com",
  from: "",
  subject: "Message for autorization",
  html: "<p>The message from site</p>",
};
sgMail
  .send(email)
  .then(() => {})
  .catch((error) => error(error.message));
