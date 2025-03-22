const Journey = require('../models/UserJourney');
const User = require('../models/User');

const saveJourney = async (req, res) => {
  try {
    const journeyForm = req.body; 
    const email = journeyForm.email; 

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user found with the provided email." });
    }

    
    let journey = await Journey.findOne({ email });

    if (journey) {
      Object.assign(journey, journeyForm);
      await journey.save();
      return res.status(200).json({ message: "Journey updated successfully", journey });
    }

    journey = new Journey(journeyForm);
    await journey.save();

    return res.status(201).json({ message: "Journey created successfully", journey });
  } catch (error) {
    console.error("Error saving journey:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveJourney };
