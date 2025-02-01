import {Link , useLocation} from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="vertical-menu">

    <div data-simplebar className="h-100">

    
        <div id="sidebar-menu">
         
            <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>

                <li>
                  <Link to="/dashboard"  className={`waves-effect ${location.pathname.includes("/dashboard") ? "mm-active" : ""}`}>
                  <i className="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                  </Link>
                  <Link to="/enterprenuer"  className={`waves-effect ${location.pathname.includes("/enterprenuer") ? "mm-active" : ""}`}>
                  <i className="fas fa-user-tie"></i>
                        <span>Enterprenuers</span>
                  </Link>
                  <Link to="/investors"    className={`waves-effect ${location.pathname.includes("/investors") ? "mm-active" : ""}`}>
                  <i className="fas fa-hand-holding-usd"></i>
                        <span>Investors</span>
                  </Link>
                  <Link to="/events" className={`waves-effect ${location.pathname.includes("/events") ? "mm-active" : ""}`}>
                  <i className="fas fa-calendar-alt"></i>
                        <span>Events</span>
                  </Link>
                </li>                            
            </ul>
        </div>
    </div>
</div>
  );
};

export default Sidebar;
