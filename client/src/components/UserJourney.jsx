import { Outlet } from "react-router-dom";
import Header from "./user-journey/Header";
import Footer from "./user-journey/Footer";
import '../styles/user-journey/UserJourney.css';

const UserJourney = ({ children }) => {
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

export default UserJourney;
