import React from "react";
import { useOutletContext } from "react-router-dom";
import Rules from '../../components/user-journey/Rules.jsx';
import JourneyCategory from '../../components/user-journey/Category.jsx';
import MyJourney from '../../components/user-journey/MyJourney.jsx';
import JourneyTeam from '../../components/user-journey/JourneyTeam.jsx'

const JourneyHome = () => {
  const { JourneyActiveTab } = useOutletContext();

  return (
    <div className="container w-50">
      {JourneyActiveTab === "Rules" && <Rules />}
      {JourneyActiveTab === "Category" && <JourneyCategory />}
      {JourneyActiveTab === "MyJourney" && <MyJourney />}
      {JourneyActiveTab === "JourneyTeam" && <JourneyTeam />}
    </div>
  );
};

export default JourneyHome;
