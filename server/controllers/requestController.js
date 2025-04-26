const ChatRequest = require("../models/ChatRequest");
const User = require("../models/User"); 

exports.storeRequest = async (req, res) => {
  try {
    const { sender_user_email, receiver_user_email, project_id, onboardingData, message } = req.body;

    const chatRequest = new ChatRequest({
      sender_user_email,
      receiver_user_email,
      project_id,
      onboardingData,
      message,
    });

    await chatRequest.save();

    res.status(200).json({ message: "Chat request sent successfully." });
  } catch (error) {
    console.error("Store chat request error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
};

exports.getRequests = async (req, res) => {
    try {      
      const userId = req.session.user_id;  // get from middleware after token verify
      const userEmail = req.session.email; 
  
      const sentRequests = await ChatRequest.find({ sender_user_email: userEmail });
      const receivedRequests = await ChatRequest.find({ receiver_user_email: userEmail });
  
      res.status(200).json({
        sent: sentRequests,
        received: receivedRequests,
      });
    } catch (error) {
      console.error("Get chat requests error:", error);
      res.status(500).json({ error: "Something went wrong." });
    }
  };