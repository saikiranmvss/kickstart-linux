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


const getJourneys = async (req, res) => {
  try {
    const { email } = req.query; // Retrieve the email from query parameters.

    if (!email) {
      return res.status(400).json({ message: "Email is required to fetch journeys." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user found with the provided email." });
    }

    const journeys = await Journey.find({ email }); // Retrieve all journeys associated with the email.

    // if (journeys.length === 0) {
    //   return res.status(404).json({ message: "No journeys found for the provided email." });
    // }

    return res.status(200).json({ message: "Journeys retrieved successfully", journeys });
  } catch (error) {
    console.error("Error fetching journeys:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = { saveJourney ,getJourneys };
