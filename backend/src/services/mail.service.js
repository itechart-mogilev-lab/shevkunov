const MailConfig = require("../config/mail");
const gmailTransport = MailConfig.GmailTransport;

const sendGmail = async (email, content, subject)=>{
        let HelperOptions = {
        from: 'Cleaning service <cleaningcompany.mog@gmail.com',
        to: email,
        subject: subject,
        text: content
      };
      gmailTransport.sendMail(HelperOptions, (error,info) => {
        if(error) {
          console.log(error);
        }
        console.log("email is send");
        console.log(info);
      });
      gmailTransport.close();
}

module.exports.gmailSend = async (email, {content, subject}) => {
  return await sendGmail(email, content, subject);
}