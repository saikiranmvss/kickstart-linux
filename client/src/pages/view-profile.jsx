import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Dropdown } from "react-bootstrap";
import { FaArrowLeft, FaCog } from "react-icons/fa";

const ViewProfile = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between p-3 bg-white shadow-sm rounded">
        <div className="d-flex align-items-center">
          <FaArrowLeft className="me-2" size={20} />
          <h4 className="mb-0">Entrepreneur</h4>
        </div>
        <div className="d-flex">
          <div className="nav nav-tabs me-3">
            <a className="nav-link active" href="#">Profile</a>
            <a className="nav-link text-muted" href="#">Projects</a>
            <a className="nav-link text-muted" href="#">Events</a>
            <a className="nav-link text-muted" href="#">Reels</a>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Multiple Owners
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Owner 1</Dropdown.Item>
              <Dropdown.Item href="#">Owner 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <FaCog size={20} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <Card className="p-3 text-center bg-white shadow-sm rounded">
            <img src="/path-to-profile-image.jpg" alt="Profile" className="img-fluid rounded-circle mb-3" />
            <h4>Sandeep Kumar</h4>
            <p>Banjara Hills | Multiple Owners</p>
            <Button variant="primary" className="me-2">Chat Now</Button>
            <Button variant="secondary">Edit Profile</Button>
          </Card>
        </div>

        <div className="col-md-8">
          <Card className="p-3 bg-white shadow-sm rounded">
            <h5>Personal Details</h5>
            <p><strong>Phone:</strong> +91 987654321</p>
            <p><strong>Email:</strong> name@mail.com</p>
            <p><strong>Portfolio:</strong> www.website.com</p>
            <p><strong>Address:</strong> 5-34-232/AB, Gold Street, Secunderabad - 680002</p>

            <h5 className="mt-4">Professional Details</h5>
            <p><strong>Phone:</strong> +91 987654321</p>
            <p><strong>Email:</strong> name@mail.com</p>
            <p><strong>Portfolio:</strong> www.website.com</p>
            <p><strong>Address:</strong> 5-34-232/AB, Gold Street, Secunderabad - 680002</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
