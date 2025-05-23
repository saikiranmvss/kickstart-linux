const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * @param {string} emailType 
 * @param {string} to 
 * @param {string} from 
 * @param {string} body 
 */
const sendEmail = async (emailType, to, from, body) => {
  console.log(from);
  const msg = {
    to: to,
    from: from, 
    subject: 'OTP for Account Recovery',
    [emailType]: body, 
  };

  try {
    const response = await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendEmail };
