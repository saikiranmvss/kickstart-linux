const Page = require('../models/Page');

const storePageContent = async (req, res) => {
  try {
    const { pageName, pageContent } = req.body;
    const user_id = req.session.user_id;
    console.log(req.session)
    if (!user_id) {
      return res.status(401).json({ message: 'Unauthorized: User session not found' });
    }

    if (!pageName || !pageContent) {
      return res.status(400).json({ message: 'Page name and content are required' });
    }

    const newPage = new Page({
      user_id,
      pageName,
      pageContent,
    });

    await newPage.save();
    res.status(201).json({ message: 'Page content stored successfully', page: newPage });

  } catch (error) {
    console.error('Error storing page content:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { storePageContent };
