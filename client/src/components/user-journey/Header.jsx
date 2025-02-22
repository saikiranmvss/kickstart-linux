import { useNavigate } from 'react-router-dom';
import {FaUser , FaEye} from  "react-icons/fa";
import {  Nav  } from "react-bootstrap"
import React, { useState ,useEffect , useRef } from "react";;

const Header = ({ JourneyActiveTab, setJourneyActiveTab }) => {
    const navigate = useNavigate();

  return (
    <header id="page-topbar">
        <div className="navbar-header row justify-content-end">
            <div className='col-md-2 d-flex justify-content-center'>
                <div className='d-flex align-items-center w-100'>
                    <button type="button" className='btn btn-outline-dark mr-2'><FaEye />   Preview</button>
                    <div className='header-user-icon'>
                        <FaUser />
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-12 d-flex justify-content-center'>
            <div className="d-flex align-items-center pr-4">
            <i className="fas fa-arrow-circle-left"></i>
            </div>
                <Nav variant="tabs" activeKey={JourneyActiveTab} onSelect={(selectedKey) => setJourneyActiveTab(selectedKey)} className="custom-tabs">
                    <Nav.Item>
                    <Nav.Link eventKey="Category" className={JourneyActiveTab === "Category" ? "active-tab" : ""}>Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="MyJourney" className={JourneyActiveTab === "MyJourney" ? "active-tab" : ""}>My Journey</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Events" className={JourneyActiveTab === "Events" ? "active-tab" : ""}>Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Reels" className={JourneyActiveTab === "Reels" ? "active-tab" : ""}>Investors</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Community" className={JourneyActiveTab === "Community" ? "active-tab" : ""}>FAQ`s</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={JourneyActiveTab === "Payment" ? "active-tab" : ""}>Connections</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Payment" className={JourneyActiveTab === "Payment" ? "active-tab" : ""}>Community</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
    </header>
  );
};

export default Header;
