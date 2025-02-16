import { Outlet } from "react-router-dom";
import Header from "./public/Header";
import Footer from "./public/Footer";
import '../styles/public/PublicDefaultLayout.css';

const PublicDefaultLayout = ({ children }) => {
  return (
        <div id="layout-wrapper">
          <Header />
          <div className="main-content">
            <div className="page-content public-page-content">
            <Outlet />
            </div>
            <Footer />
          </div>
        </div>
  );
};

export default PublicDefaultLayout;
