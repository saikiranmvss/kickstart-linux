import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./user-journey/Header";
import Footer from "./user-journey/Footer";
import "../styles/user-journey/UserJourney.css";
import axios from "../utils/axiosConfig";
import { Circles } from "react-loader-spinner";

const UserJourney = () => {
  const [JourneyActiveTab, setJourneyActiveTab] = useState("Rules");
  const [loading, setLoading] = useState(true); // Track loading state
  const [journeyData, setJourneyData] = useState(null); // Store journey data
  const email = JSON.parse(localStorage.getItem('user')).email

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/journey/user-journey?email=${email}`
        );
        if (response.status === 200) {          
          setJourneyData(response.data.journeys[0] || []); 
        }
      } catch (error) {
        console.error("Error fetching journey data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [email]);

  if (loading) {
    
    return (
      <div className="loader-container">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  // if (!journeyData || journeyData.length === 0) {
    
  //   return (
  //     <div className="no-data-container">
  //       <p>No journey data available.</p>
  //     </div>
  //   );
  // }

  return (
    <div id="layout-wrapper">
      <Header JourneyActiveTab={JourneyActiveTab} setJourneyActiveTab={setJourneyActiveTab} />
      <div className="main-content public-main-content">
        <div className="page-content public-page-content">
          <Outlet context={{ journeyData , JourneyActiveTab, setJourneyActiveTab }} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserJourney;
