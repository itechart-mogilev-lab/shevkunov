const MailConfig = require("../config/mail");
const gmailTransport = MailConfig.GmailTransport;

const sendGmail = async (email, content, subject) => {
  let HelperOptions = {
    from: "Cleaning service <cleaningcompany.mog@gmail.com",
    to: email,
    subject: subject,
    text: content
  };
  gmailTransport.sendMail(HelperOptions, (error, info) => {
    if (error) {
    }
  });
  gmailTransport.close();
};

module.exports.gmailSend = async (email, { content, subject }) => {
  return await sendGmail(email, content, subject);
};
