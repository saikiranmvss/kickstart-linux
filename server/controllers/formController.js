const Form = require('../models/formModel');


exports.submitForm = async (req, res) => {
  try {
    const formData = req.body;


    const form = new Form(formData);
    await form.save();

    console.log('Form Data:', formData);

    res.json({
      message: 'Form submitted successfully',
      data: formData
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.validateEmail = async (req, res) => {
  try {
    const formData = req.body;


    const form = new Form(formData);
    await form.save();

    console.log('Form Data:', formData);

    res.json({
      message: 'Form submitted successfully',
      data: formData
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};