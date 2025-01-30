import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
  return (
        <div id="layout-wrapper">
          <Header />
          <Sidebar />
          <div className="main-content">
            <div className="page-content">
            <Outlet />
            </div>
            <Footer />
          </div>
        </div>
  );
};

export default DefaultLayout;
