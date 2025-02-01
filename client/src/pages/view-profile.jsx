import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Dropdown, Nav } from "react-bootstrap";
import { FaCog } from "react-icons/fa";
import "../styles/ViewProfile.css";
import Chart from "react-apexcharts";

const ViewProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const chartOptions = {
    series: [85, 75, 50], 
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return "100%";
            },
          },
        },
        hollow: {
          size: "50%",
        },
      },
    },
    colors: ["#007bff", "#FFA500", "#FF6347"],
    labels: ["Project Views", "Likes", "Investors Connect"],
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div className="row mt-4">
            <div className="col-md-5">
              <div className="p-3 text-center bg-white shadow-sm rounded row">
                <div className="col-4">
                  <img src="/images/dummy.png" alt="Profile" className="img-fluid rounded-2 mb-3" />
                </div>
                <div className="col-7">
                  <div className="text-left">
                    <p className="font-size-12 m-0">ID: EP-001234</p>
                    <h4>Sandeep Kumar</h4>
                    <p className="font-size-12 m-0">Banjara Hills | Multiple Owners</p>
                  </div>
                  <div className="mt-2 d-block float-left">
                    <div>
                      <Button className="font-size-12 btn-color-prime me-2 rounded-3"><i className="far fa-comments mr-2"></i>Chat Now</Button>
                      <Button variant="light" className="font-size-12 rounded-3">Edit Profile</Button>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <i className="fas fa-ellipsis-v"></i>
                </div>    

                <hr class="dotted" />

                <div className="profile-details">
                  <div className="">
                    <h2 className="text-xl font-bold mb-2 text-left">Personal Details</h2>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Phone</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-phone"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Email</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-envelope"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">name@gmail.com</p></div>                          
                          </div>
                      </div>
                    </div>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Portfolio</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-globe"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Address</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-map-marker-alt"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">5-32-34/AB Gold street Diamond Appartment , Secunderabad - 680002</p></div>                          
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-xl font-bold mb-2 text-left">Professional Details</h2>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Phone</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-phone"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Email</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-envelope"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">name@gmail.com</p></div>                          
                          </div>
                      </div>
                    </div>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Portfolio</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-globe"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p class="font-medium text-gray-500 mb-1">Address</p>                          
                          </div>
                          <div class="col-md-12 d-flex">
                            <div class="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i class="fas fa-map-marker-alt"></i></div>
                            <div className="d-flex align-items-end px-2"><p class="font-semibold text-gray-800 m-0 mb-2">5-32-34/AB Gold street Diamond Appartment , Secunderabad - 680002</p></div>                          
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>                
            </div>
            <div className="col-md-3">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md">
                  <h2 className="text-lg font-bold">Project Summary</h2>
                  <p className="text-sm text-gray-500">2024 - 2025</p>

                  <div className="my-6 flex justify-center">
                    <Chart options={chartOptions} series={chartOptions.series} type="radialBar" height={250} />
                  </div>

                  <div className="space-y-4">
                    {/* Project Views */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-600">Project Views</span>
                      </div>
                      <span className="text-sm font-semibold">5,200 K</span>
                    </div>

                    {/* Investors Connect */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span className="text-sm text-gray-600">Investors Connect</span>
                      </div>
                      <span className="text-sm font-semibold">002</span>
                    </div>

                    {/* Likes */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm text-gray-600">Likes</span>
                      </div>
                      <span className="text-sm font-semibold">2.5 K</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md mt-2 text-center">
                    <div className="mb-1">Bussiness Category</div>
                    <div className="mb-1">Main Category | Sub Category</div>
                    <div className="mb-2"><button className="btn-light p-1 w-100 rounded-2">Sustainable</button></div>
                    <div><button className="btn-light w-100 p-1 rounded-2">Eco-Friendly</button></div>
                </div>

            </div>

            <div className="col-md-4">
              <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md">
                <div className="mb-4"><h5>Investment Required</h5></div>
                <div><h3>₹ 10,000 INR</h3></div>
              </div>
            </div>
          </div>
        );
      case "Projects":
        return (
          <Card className="p-3 bg-white shadow-sm rounded mt-4">
            <h5>Projects</h5>
            <p>List of projects will be displayed here.</p>
          </Card>
        );
      case "Events":
        return (
          <Card className="p-3 bg-white shadow-sm rounded mt-4">
            <h5>Events</h5>
            <p>Upcoming events details will be displayed here.</p>
          </Card>
        );
      case "Reels":
        return (
          <Card className="p-3 bg-white shadow-sm rounded mt-4">
            <h5>Reels</h5>
            <p>Recent reels and videos will be shown here.</p>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between p-3 bg-white shadow-sm rounded">
        <div className="d-flex align-items-center">
        <i class="fas fa-arrow-circle-left"></i>
          <h4 className="mb-0 mx-3">Entrepreneur</h4>
        </div>
        <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)} className="custom-tabs">
          <Nav.Item>
            <Nav.Link eventKey="Profile" className={activeTab === "Profile" ? "active-tab" : ""}>Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Projects" className={activeTab === "Projects" ? "active-tab" : ""}>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Events" className={activeTab === "Events" ? "active-tab" : ""}>Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Reels" className={activeTab === "Reels" ? "active-tab" : ""}>Reels</Nav.Link>
          </Nav.Item>
        </Nav>
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

      {renderContent()}
    </div>
  );
};

export default ViewProfile;
