const nodemailer = require('nodemailer');

exports.SendVerificationEmail = async function send(email, verificationToken) {
  const mailOptions = {
    from: 'Remitente',
    to: email,
    subject: 'Asunto',
    text: `su token de verificacion es ${verificationToken}`,
  };

  await transporter.sendMail(mailOptions, error => {
    if (error) {
      console.log(error);
      throw new Error('sdfsdfsdfsdf');
    }
  });
};

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'batallaprovinciana@gmail.com',
    pass: 'losMiinionsXd2019',
  },
});
