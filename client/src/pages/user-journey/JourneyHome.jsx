import React from "react";
import { useOutletContext } from "react-router-dom";
import Rules from '../../components/user-journey/Rules.jsx';
import JourneyCategory from '../../components/user-journey/Category.jsx';

const JourneyHome = () => {
  const { JourneyActiveTab } = useOutletContext();
  console.log(JourneyActiveTab);

  return (
    <div className="container w-50">
      {JourneyActiveTab === "Rules" && <Rules />}
      {JourneyActiveTab === "Category" && <JourneyCategory />}
    </div>
  );
};

export default JourneyHome;
