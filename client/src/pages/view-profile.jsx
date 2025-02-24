import React, { useState , useEffect , useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Card, Button, Dropdown , Nav  } from "react-bootstrap";
import { FaCog } from "react-icons/fa";
import "../styles/ViewProfile.css";
import ProjectChart from "../components/ProjectChart";
import { FaLinkedin, FaYoutube, FaGlobe , FaSave , FaCamera , FaEllipsisV } from "react-icons/fa";
import Events from './Events';
import Select from "react-select";
import ThreeWaySwitch from "../components/ThreeWaySwitch";
import axios from "axios";

const socialLinks = [
  { icon: <FaLinkedin className="text-white" />, url: "linkedin.com/Profile", bg: "bg-[#0077B5]" },
  { icon: <FaYoutube className="text-white" />, url: "youtube.com/Profile", bg: "bg-[#FF0000]" },
  { icon: <FaGlobe className="text-white" />, url: "domain.com/Profile", bg: "bg-[#007BFF]" },
];


const ViewProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [image, setImage] = useState(null);
  const { user, fetchUserData } = useContext(AuthContext);


  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
    { value: "mango", label: "Mango" },
  ];

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        ...user, 
        notifications: { ...prevData.notifications, ...user.notifications }
      }));
    }
  }, [user]);

  const [formData, setFormData] = useState({
    profileImage: "",
  mobile: "",
  languages: [],
  dob: "",
  gender: "",
  firstName: "",
  lastName: "",
  whatsappNo: "",
  primaryEmail: "",
  secondaryEmail: "",
  address: "",
  country: "",
  notifications: {
    email: false,
    sms: false,
    phone: false,
    post: false
  },
  portfolio: "",
  linkedin: "",
  instagram: "",
  stateCity: "",
  postal: "",
  website: "",
  youtube: "",
  businessName: "",
  businessEmail: "",
  companyAddress: "",
  businessCategory: "",
  subCategory: "",
  portfolioURL: "",
  companyWebsite: "",
  companyLinkedin: "",
  companyInstagram: "",
  companyYoutube: "",
  pastJobExperience: "",
  department: "",
  fromYear: "",
  pastWebsite: ""
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  
  const handleChange = (selected) => {
    setSelectedOptions(selected);
    setFormData({ ...formData, languages: selected.map((opt) => opt.value) });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        notifications: { ...formData.notifications, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem('email');
    const jsonPayload = { ...formData, languages: selectedOptions  , email : email};

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/save-profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPayload),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data");
    }
  };

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
                      <Button variant="light" className="font-size-12 rounded-3" onClick={()=>setActiveTab('edit-profile')}>Edit Profile</Button>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <i className="fas fa-ellipsis-v"></i>
                </div>    

                <hr className="dotted" />

                <div className="profile-details">
                  <div className="">
                    <h2 className="text-xl font-bold mb-2 text-left">Personal Details</h2>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Phone</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-phone"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Email</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-envelope"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">name@gmail.com</p></div>                          
                          </div>
                      </div>
                    </div>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Portfolio</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-globe"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Address</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">5-32-34/AB Gold street Diamond Appartment , Secunderabad - 680002</p></div>                          
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-xl font-bold mb-2 text-left">Professional Details</h2>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Phone</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-phone"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Email</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-envelope"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">name@gmail.com</p></div>                          
                          </div>
                      </div>
                    </div>

                    <div className="row mb-4 justify-content-between">                      
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Portfolio</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-globe"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">+91 987654321</p></div>                          
                          </div>
                      </div>
                      <div className="col-md-6 row flex-column">
                          <div className="col-md-12 text-start">
                            <p className="font-medium text-gray-500 mb-1">Address</p>                          
                          </div>
                          <div className="col-md-12 d-flex">
                            <div className="p-2 bg-gray-100 rounded-3 w-10 detail-icons"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="d-flex align-items-end px-2"><p className="font-semibold text-gray-800 m-0 mb-2">5-32-34/AB Gold street Diamond Appartment , Secunderabad - 680002</p></div>                          
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>                
            </div>
            <div className="col-md-4">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md">
                  <h2 className="text-lg font-bold">Project Summary</h2>
                  <p className="text-sm text-gray-500">2024 - 2025</p>

                  <div className="my-6 flex justify-center">
                    <ProjectChart />
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

            <div className="col-md-3 row flex-column p-0">
              <div className="col-md-12 mb-2">
                <div className="p-6 bg-white rounded-2xl shadow-md">
                  <div className="mb-4"><h5>Investment Required</h5></div>
                  <div><h3>₹ 10,000 INR</h3></div>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="p-6 bg-white rounded-2xl shadow-md">
                  <div className="mb-4"><h5>Investment Required</h5></div>
                  <div><h3>₹ 10,000 INR</h3></div>
                </div>
              </div>
              <div className="col-md-12 mb-2">
                <div className="p-6 bg-white rounded-2xl shadow-md">
                    <h4>Social Handles</h4>
                    <p>Social | Portfolio | Website</p>
                    <div>
                      <div className="flex flex-col gap-3 max-w-sm">
                        {socialLinks.map((link, index) => (
                          <a
                            key={index}
                            href={`https://${link.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200 transition"
                          >
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${link.bg}`}>
                              {link.icon}
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{link.url}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
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
            <Events/>
          </Card>
        );
      case "Reels":
        return (
          <Card className="p-3 bg-white shadow-sm rounded mt-4">
            <h5>Reels</h5>
            <p>Recent reels and videos will be shown here.</p>
          </Card>
        );
        case "Community":
          return (
            <Card className="p-3 bg-white shadow-sm rounded mt-4">
              <h5>Main Community</h5>
                <div className="row">
                    <div className="col-md-2">
                        <div className="row community-card">
                            <div className="col-md-12 d-flex justify-content-end mb-1">
                              <div className="community-icon">
                                <FaEllipsisV className=""/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <img src="images/community.png" alt="" srcset=""/>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="community-badge">
                                  <p>Sustainable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row community-card">
                            <div className="col-md-12 d-flex justify-content-end mb-1">
                              <div className="community-icon">
                                <FaEllipsisV className=""/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <img src="images/community.png" alt="" srcset=""/>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="community-badge">
                                  <p>Sustainable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row community-card">
                            <div className="col-md-12 d-flex justify-content-end mb-1">
                              <div className="community-icon">
                                <FaEllipsisV className=""/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <img src="images/community.png" alt="" srcset=""/>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="community-badge">
                                  <p>Sustainable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row community-card">
                            <div className="col-md-12 d-flex justify-content-end mb-1">
                              <div className="community-icon">
                                <FaEllipsisV className=""/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <img src="images/community.png" alt="" srcset=""/>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="community-badge">
                                  <p>Sustainable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row community-card">
                            <div className="col-md-12 d-flex justify-content-end mb-1">
                              <div className="community-icon">
                                <FaEllipsisV className=""/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <img src="images/community.png" alt="" srcset=""/>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="community-badge">
                                  <p>Sustainable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row community-card">
                            <div className="col-md-12 d-flex justify-content-end mb-1">
                              <div className="community-icon">
                                <FaEllipsisV className=""/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <img src="images/community.png" alt="" srcset=""/>
                            </div>
                            <div className="col-md-12 mt-2">
                                <div className="community-badge">
                                  <p>Sustainable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
          );
        case "edit-profile":
          return (
            <form onSubmit={handleSubmit} className="row mt-4">          
              <div className="col-md-12  p-3 bg-white shadow-sm rounded">
                <strong>Edit Profile</strong>
              </div>
              <div className="col-md-12 p-3 bg-white shadow-sm rounded personal-details" style={{marginTop: '0.2rem'}}>
                  <div className="row">
                      <div className="col-md-12 mb-2"><strong>Personal Details</strong></div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                            <div className="profile-picture-container">
                              <label className="image-upload">
                                <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                                <div className="image-box">
                                  {image ? (
                                    <img src={image} alt="Profile" className="profile-img" />
                                  ) : (
                                    <div className="default-img">
                                      <FaCamera className="default-icon" />
                                    </div>
                                  )}
                                </div>
                                <div className="change-picture">
                                  <FaCamera className="icon" />
                                  Change Picture
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="mobile" className="form-label">Mobile No.</label>
                              <input type="text" name="mobile" id="mobile" className="form-control" value={formData.mobile} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                            <label htmlFor="">Language - Multiselect</label>
                            <Select
                                isMulti
                                options={options}
                                value={selectedOptions}
                                onChange={handleChange}
                                className="basic-multi-select"
                                classNamePrefix="select"
                              />
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="mobile" className="form-label">Date of Birth</label>
                              <input type="date" name="dob" id="dob" className="form-control" onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="mobile" className="form-label">Gender</label>
                              <ThreeWaySwitch />
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                              <label htmlFor="firstName" className="form-label">Frist Name</label>
                              <input type="text" name="firstName" id="firstName" className="form-control" value={formData.firstName} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="lastName" className="form-label">Last Name</label>
                              <input type="text" name="lastName" id="lastName" className="form-control" value={formData.lastName} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="whatsappNo" className="form-label">Whatsapp Mobile No.</label>
                              <input type="text" name="whatsappNo" id="whatsappNo" className="form-control" value={formData.whatsappNo} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="primaryEmail" className="form-label">Primary Email ID</label>
                              <input type="text" name="primaryEmail" id="primaryEmail" className="form-control" value={formData.primaryEmail} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="secondaryEmail" className="form-label">Secondary Email ID</label>
                              <input type="text" name="secondaryEmail" id="secondaryEmail" className="form-control" value={formData.secondaryEmail} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="address" className="form-label">Address</label>
                              <textarea rows='5' name="address" id="address" className="form-control" onChange={handleInputChange}>{formData.address}</textarea>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                              <label htmlFor="country" className="form-label">Country</label>
                              <input type="text" name="country" id="country" className="form-control" value={formData.country} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="mobile" className="form-label">Notifications</label>
                              <div className="row m-0">
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="email" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="email">Email</label>
                                  </div>
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="sms" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="sms">SMS</label>
                                  </div>
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="phone" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="phone">Phone</label>
                                  </div>
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="post" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="post">Post</label>
                                  </div>
                              </div>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="portfolio" className="form-label">Portfolio Link</label>
                              <input type="text" name="portfolio" id="portfolio" className="form-control" value={formData.portfolio} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="linkedin" className="form-label">LinkedIN</label>
                              <input type="text" name="linkedin" id="linkedin" className="form-control" value={formData.linkedin} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="instagram" className="form-label">Instagram</label>
                              <input type="text" name="instagram" id="instagram" className="form-control" value={formData.instagram} onChange={handleInputChange}/>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                              <label htmlFor="stateCity" className="form-label">State/City</label>
                              <input type="text" name="stateCity" id="stateCity" className="form-control" value={formData.stateCity} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="postal" className="form-label">Postal Address</label>
                              <textarea row="5" name="postal" id="postal" className="form-control" value={formData.postal} onChange={handleInputChange}></textarea>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="website" className="form-label">Website</label>
                              <input type="text" name="website" id="website" className="form-control" value={formData.website} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="youtube" className="form-label">Youtube</label>
                              <input type="text" name="youtube" id="youtube" className="form-control" value={formData.youtube} onChange={handleInputChange}/>
                          </div>
                      </div>
                  </div>
                  <hr />
                  <div className="row">
                      <div className="col-md-12 mb-2"><strong>Professional Details</strong></div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                            <div className="profile-picture-container">
                              <label className="image-upload">
                                <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                                <div className="image-box">
                                  {image ? (
                                    <img src={image} alt="Profile" className="profile-img" />
                                  ) : (
                                    <div className="default-img">
                                      <FaCamera className="default-icon" />
                                    </div>
                                  )}
                                </div>
                                <div className="change-picture">
                                  <FaCamera className="icon" />
                                  Company Logo
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="mobile" className="form-label">Notifications</label>
                              <div className="row m-0">
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="email" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="email">Email</label>
                                  </div>
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="sms" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="sms">SMS</label>
                                  </div>
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="phone" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="phone">Phone</label>
                                  </div>
                                  <div className="col-md-6 form-check">
                                    <input className="form-check-input me-2" type="checkbox" id="post" onChange={handleInputChange}/>
                                    <label className="form-check-label" htmlFor="post">Post</label>
                                  </div>
                              </div>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="businessCategory" className="form-label">Bussiness Categories</label>
                              <input type="text" name="businessCategory" id="businessCategory" className="form-control" value={formData.businessCategory} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="companyWebsite" className="form-label">Company Website</label>
                              <input type="text" name="companyWebsite" id="companyWebsite" className="form-control" value={formData.companyWebsite}  onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="companyLinkedin" className="form-label">Company LinkedIN</label>
                              <input type="text" name="companyLinkedin" id="companyLinkedin" className="form-control" value={formData.companyLinkedin} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="companyInstagram" className="form-label">Company Instagram</label>
                              <input type="text" name="companyInstagram" id="companyInstagram" className="form-control" value={formData.companyInstagram} onChange={handleInputChange}/>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                              <label htmlFor="businessName" className="form-label">Bussiness Name</label>
                              <input type="text" name="businessName" id="businessName" className="form-control" value={formData.businessName} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="businessEmail" className="form-label">Bussiness Email ID</label>
                              <input type="text" name="businessEmail" id="businessEmail" className="form-control" value={formData.businessEmail} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="companyAddress" className="form-label">Company Address</label>
                              <textarea row="5" name="companyAddress" id="companyAddress" className="form-control" value={formData.companyAddress} onChange={handleInputChange}></textarea>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="subCategory" className="form-label">Sub Category</label>
                              <input type="text" name="subCategory" id="subCategory" className="form-control" value={formData.subCategory} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="portfolioURL" className="form-label">Portfolio URL</label>
                              <input type="text" name="portfolioURL" id="portfolioURL" className="form-control" value={formData.portfolioURL} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="companyYoutube" className="form-label">Company Youtube URL</label>
                              <input type="text" name="companyYoutube" id="companyYoutube" className="form-control" value={formData.companyYoutube} onChange={handleInputChange}/>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                              <label htmlFor="pastJobExperience" className="form-label">Past Job Experience</label>
                              <input type="text" name="pastJobExperience" id="pastJobExperience" className="form-control" value={formData.pastJobExperience} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="department" className="form-label">Department</label>
                              <input type="text" name="department" id="department" className="form-control" value={formData.department} onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="from_year" className="form-label">From Year</label>
                              <input type="date" name="from_year" id="from_year" className="form-control" onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="pastWebsite" className="form-label">Website</label>
                              <input type="text" name="pastWebsite" id="pastWebsite" className="form-control" value={formData.pastJobExperience} onChange={handleInputChange}/>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="mb-3 form-group">
                              <label htmlFor="state_city" className="form-label">State/City</label>
                              <input type="text" name="state_city" id="state_city" className="form-control" onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="postal" className="form-label">Postal Address</label>
                              <textarea row="5" name="postal" id="postal" className="form-control" onChange={handleInputChange}></textarea>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="website" className="form-label">Website</label>
                              <input type="text" name="website" id="website" className="form-control" onChange={handleInputChange}/>
                          </div>
                          <div className="mb-3 form-group">
                              <label htmlFor="website" className="form-label">Youtube</label>
                              <input type="text" name="youtube" id="youtube" className="form-control" onChange={handleInputChange}/>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                      <div>
                          <button type="submit" className='btn btn-primary d-flex align-items-center'><FaSave className="mr-2" />Save and Next</button>
                      </div>
                    </div>
                  </div>
              </div>
          </form>
          );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between p-3 bg-white shadow-sm rounded">
        <div className="d-flex align-items-center">
        <i className="fas fa-arrow-circle-left"></i>
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
          <Nav.Item>
            <Nav.Link eventKey="Community" className={activeTab === "Community" ? "active-tab" : ""}>Community</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Payment" className={activeTab === "Payment" ? "active-tab" : ""}>Payment</Nav.Link>
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
