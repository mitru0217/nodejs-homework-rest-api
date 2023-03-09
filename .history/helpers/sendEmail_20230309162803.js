const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "mitru0217@gmail.com",
  from: "mitru0217@meta.ua",
  subject: "Message for autorization",
  html: "<p>The message from site</p>",
};
sgMail
  .send(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));
