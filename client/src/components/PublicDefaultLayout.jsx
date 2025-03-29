import { useEffect, useState } from "react";
import { Outlet , useParams  } from "react-router-dom";
import axios from 'axios';
import Header from "./public/Header";
import Footer from "./public/Footer";
import '../styles/public/PublicDefaultLayout.css';

const PublicDefaultLayout = ({ method }) => {

  const slug = window.location.pathname.split("/")[1];
  const [journey, setJourney] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {    
    const fetchJourney = async () => {
      console.log(slug);
      if (method == "slug" && slug) {         
        setLoading(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/journey/slug/${slug}`);
          if (response.status === 200) {
            setJourney(response.data.journey);
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
            <Outlet />
            </div>
            <Footer />
          </div>
        </div>
  );
};

export default PublicDefaultLayout;
