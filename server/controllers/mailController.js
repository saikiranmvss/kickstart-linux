const { sendEmail } = require('../utils/mailService');

/**
 * @param {object} req - Request object
 * @param {object} res - Response object
 */
const sendDynamicEmail = async (req, res) => {
  const { emailType, to, from, body } = req.body;

  if (!emailType || !to || !from || !body) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await sendEmail(emailType, to, from, body);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email', error });
  }
};

module.exports = { sendDynamicEmail };
