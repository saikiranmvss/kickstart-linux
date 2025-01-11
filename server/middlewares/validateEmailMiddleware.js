const emailValidator = (req, res, next) => {
    const { email } = req.body;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    next();
  };
  
  module.exports = emailValidator;
  