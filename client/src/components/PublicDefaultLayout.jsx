import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "../utils/axiosConfig";
import Header from "./public/Header";
import Footer from "./public/Footer";
import "../styles/public/PublicDefaultLayout.css";
import { Circles } from "react-loader-spinner";

const PublicDefaultLayout = ({ method }) => {
  const slug = window.location.pathname.split("/")[1];
  const [journey, setJourney] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJourney = async () => {
      if (method === "slug" && slug) {
        setLoading(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/journey/slug/${slug}`);
          if (response.status === 200) {
            console.log(response.data.journeys);
            setJourney(response.data.journeys[0]);
          } else {
            setError("Journey not found");
          }
        } catch (err) {
          console.error("Error fetching journey:", err);
          setError("Failed to fetch journey");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchJourney();
  }, [method, slug]);

  return (
    <div id="layout-wrapper">
      <Header />
      <div className="main-content public-main-content">
        <div className="page-content public-page-content">
          {loading ? (
            // Show the loader while data is being fetched
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
          ) : error ? (
            // Show error message if there was an error
            <div className="error-message">{error}</div>
          ) : (
            // Show Outlet once data is fetched
            <Outlet context={journey} />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicDefaultLayout;
