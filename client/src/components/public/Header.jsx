import { useNavigate } from 'react-router-dom';
import {FaUser} from  "react-icons/fa";
import {  Nav  } from "react-bootstrap"
import React, { useState ,useEffect , useRef } from "react";;

const Header = () => {
    const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <header id="page-topbar">
        <div className="navbar-header row justify-content-end">
            <div className='col-md-2 d-flex justify-content-end'>
                <div className='d-flex align-items-center pr-8'>
                    <button type="button" className='btn btn-primary mr-2'>Start Project</button>
                    <div className='header-user-icon'>
                        <FaUser />
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-12 d-flex justify-content-center'>
                <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)} className="custom-tabs">
                    <Nav.Item>
                    <Nav.Link eventKey="Profile" className={activeTab === "Profile" ? "active-tab" : ""}>Eco-friendly</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Projects" className={activeTab === "Projects" ? "active-tab" : ""}>Technology</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Events" className={activeTab === "Events" ? "active-tab" : ""}>Manufacturer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Reels" className={activeTab === "Reels" ? "active-tab" : ""}>Drone</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Community" className={activeTab === "Community" ? "active-tab" : ""}>Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Gifting</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Food</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Fashion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Shortfilm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Photography</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>More</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
    </header>
  );
};

export default Header;
