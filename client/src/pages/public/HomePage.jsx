import React from "react";
import { FaSearch, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-gray-100" style={{ height: "50vh" }}>
      <div className="container text-center">
        {/* Title Section */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h4 className="mb-5">Bringing amazing ideas to life</h4>
          </div>
          <div className="col-md-6">
            <div className="input-group mb-4">
              <span className="input-group-text">
                <FaSearch />
              </span>
              <input type="text" className="form-control" placeholder="Search here..." />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row bg-white shadow-sm p-4 rounded">
              
              <div className="col-md-3 d-flex flex-column justify-content-center">
                <div className="d-flex">
                    <div><FaMapMarkerAlt className="text-primary mb-2" size={24} /></div>
                    <div className="pl-2">
                        <h5 className="fw-bold text-left">4,000 +</h5>
                        <p className="text-muted text-left">Cities and Towns Listed for the First Time Ever</p>
                    </div>
                </div>
              </div>

              <div className="col-md-1 d-flex justify-content-center">
                <div className="vr"></div>
              </div>

              <div className="col-md-3 d-flex flex-column justify-content-center">
                <div className="d-flex">
                    <div><FaUsers className="text-primary mb-2" size={24} /></div>
                    <div className="pl-2">
                        <h5 className="fw-bold text-left">10,000 +</h5>
                        <p className="text-muted text-left">Entrepreneurs, Investors, and VCs Onboarded</p>
                    </div>
                </div>
              </div>

              <div className="col-md-1 d-flex justify-content-center">
                <div className="vr"></div>
              </div>

              <div className="col-md-3 d-flex flex-column justify-content-center">
                <div className="d-flex">
                    <div><MdCurrencyRupee className="text-primary mb-2" size={24} /></div>
                    <div className="pl-2">
                        <h5 className="fw-bold text-left">₹45 billion</h5>
                        <p className="text-muted text-left">Expected To Be Invested In Startups In 2025</p>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
