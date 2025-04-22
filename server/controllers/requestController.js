const ChatRequest = require("../models/ChatRequest");

exports.storeRequest = async (req, res) => {
  try {
    const { user_id, project_id, role, interest, goal, message } = req.body;

    if (!user_id || !project_id || !role || !interest || !goal || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newRequest = new ChatRequest({
      user_id,
      project_id,
      onboardingData: { role, interest, goal },
      message,
    });

    await newRequest.save();

    return res.status(200).json({ message: "Chat request submitted successfully!" });
  } catch (error) {
    console.error("Error storing chat request:", error);
    return res.status(500).json({ message: "Server error. Try again later." });
  }
};
