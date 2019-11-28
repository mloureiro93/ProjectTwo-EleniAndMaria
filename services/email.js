const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

module.exports = function(email, token) {
  console.log("EMAIL TEST", email, token);
  transporter
    .sendMail({
      from: `<${process.env.EMAIL}>`,
      to: email,
      subject: "2daysAway: Confirm Your Email",
      html: `
          <a href="http://localhost:4500/authentication/confirm/${token}">
          In order to begin your joutney please confirm your Email by clicking on the link.
          Happy Travelling!</a>
        `
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
