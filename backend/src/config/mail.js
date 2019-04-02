const nodemailer = require("nodemailer");
const config = require("../config/environment");

module.exports.GmailTransport = nodemailer.createTransport({
  service: config.gmailService.name,
  host: config.gmailService.host,
  secure: config.gmailService.secure,
  port: config.gmailService.port,
  auth: {
    user: config.gmailUser.username,
    pass: config.gmailUser.password
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});

module.exports.mailForUnblocked = name => {
  const content = `${name}, Ваш профиль разблокировали`;
  const subject = `Ваш профиль разблокирован`;
  return { content, subject };
};

module.exports.mailForBlocked = (name, reason) => {
  const content = `${name}, Ваш профиль заблокировали по следующей причине: ${reason}`;
  const subject = `Ваш профиль заблокировали`;
  return { content, subject };
};

module.exports.mailForVerify = (name, rndCode, verifyToken, host) => {
  const content = `${name}, Ваш код подтверждения ${rndCode} пожалуйста перейдите по ссылке http://${host}/auth/confirmation/${verifyToken} для подтверждения вашей учетной записи`;
  const subject = "Подтверждение учетной записи";
  return { content, subject };
};
