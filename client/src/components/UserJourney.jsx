import React, { useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./user-journey/Header";
import Footer from "./user-journey/Footer";
import '../styles/user-journey/UserJourney.css';

const UserJourney = () => {
  const [JourneyActiveTab, setJourneyActiveTab] = useState("Rules");
  return (
        <div id="layout-wrapper">
          <Header JourneyActiveTab={JourneyActiveTab} setJourneyActiveTab={setJourneyActiveTab} />
          <div className="main-content public-main-content">
            <div className="page-content public-page-content">
            <Outlet context={{ JourneyActiveTab }} />
            </div>
            <Footer />
          </div>
        </div>
  );
};

export default UserJourney;
