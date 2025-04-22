import React , { useEffect , useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import axios from 'axios';
import ProjectSlider from "../../components/ProductSlider";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/journey/get-all-journeys`);
        console.log("Projects fetched:", response.data.journeys);
        setProjects(response.data.journeys); 
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="container-fluid" style={{backgroundImage: 'url("./images/home-bg.jpg")',padding: 'calc(90px + 15px) calc(0px / 2) 90px calc(0px / 2)', }}>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h4 className="mb-5 text-center">Bringing amazing ideas to life</h4>
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

                <div className="col-md-4 d-flex flex-column justify-content-center">
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

        <div className="max-w-[1236px] mt-4">

        <div>
          {projects.length > 0 ? (
            <ProjectSlider projects={projects} />
          ) : (
            <p className="text-center">Loading projects...</p>
          )}
        </div>


            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="./images/home-6.png"
                  alt="Excited Man"
                  className="img-fluid w-[500px]"
                />
              </div>
              
              <div className="col-md-5">
                <h2 className="text-2xl font-semibold mb-4">Super Benefits</h2>
                <p className="text-gray-700 mb-4">
                  Our Startup Portal to gain access to a global network of investors and unparalleled visibility for your startup. Showcase your innovative ideas, connect with thousands of investors worldwide, and be part of Bharat’s first comprehensive startup ecosystem.
                </p>
                <h3 className="text-2xl font-semibold mb-4">The wait is over now!</h3>
                <p className="text-gray-600 mb-4">
                  I’ve been struggling for a while to find investors and showcase my pitch deck. It became hectic to speak to each investor about my startup idea. I attended numerous startup events, spending a lot of money on tickets, hoping to find that one investor. But not anymore. All my time and effort have paid off.
                </p>
                <p className="text-gray-600 mb-4">
                  This portal will help me showcase my startup to many investors, and now, instead of me finding investors, investors will find me.
                </p>
                <button className="px-3 py-2 bg-white border border-gray-500 rounded-full text-gray-800 hover:bg-gray-100">
                  Start A Project
                </button>
              </div>
            </div>

              <div className="row justify-content-center mt-5">
                  <div className="col-md-2 mb-4 mx-4">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold mb-2">01</h2>
                      <h3 className="text-xl font-semibold mb-2">Create</h3>
                      <p className="text-gray-600">Upload your startup idea, create a proper problem statement, outline what you’re working on, the steps taken into action, and the solutions you’re providing.</p>
                    </div>
                  </div>
                  <div className="col-md-2 mb-4 mx-4">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold mb-2">02</h2>
                      <h3 className="text-xl font-semibold mb-2">Share</h3>
                      <p className="text-gray-600">Showcase your innovative ideas, connect with thousands of investors worldwide, and be part of Bharat’s first comprehensive startup ecosystem.</p>
                    </div>
                  </div>
                  <div className="col-md-2 mb-4 mx-4">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold mb-2">03</h2>
                      <h3 className="text-xl font-semibold mb-2">Network</h3>
                      <p className="text-gray-600">Engage with a vibrant community of entrepreneurs, mentors, and industry experts. Build meaningful relationships that can propel your startup to new heights.</p>
                    </div>
                  </div>
                  <div className="col-md-2 mb-4 mx-4">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold mb-2">04</h2>
                      <h3 className="text-xl font-semibold mb-2">Funding</h3>
                      <p className="text-gray-600">Secure the funding you need to grow and scale your business. Our platform connects you with investors who are actively looking for promising startups like yours.</p>
                    </div>
                  </div>
              </div>

              <div className="row align-items-center mt-5">
                <div className="col-md-6 text-center mb-4 mb-md-0">
                  <img
                    src="./images/home-5.png"
                    alt="Excited Man"
                    className="img-fluid w-[500px]"
                  />
                </div>

                <div className="col-md-6">
                  <h2 className="text-3xl font-bold mb-4">Still Confused?</h2>
                  <p className="text-gray-700 mb-6">
                    Upload your startup now to gain access to a global network of investors and unparalleled visibility for your startup. Showcase your innovative ideas, connect with thousands of investors worldwide, and be part of India’s first comprehensive startup ecosystem.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Reason to Join Kickstarter</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <span className="font-bold">Investment Opportunities:</span> Attract investments from a worldwide network.
                    </li>
                    <li>
                      <span className="font-bold">Enhanced Visibility:</span> Gain global recognition for your startup.
                    </li>
                    <li>
                      <span className="font-bold">Showcase Your Ideas:</span> Easily present and share your startup ideas.
                    </li>
                    <li>
                      <span className="font-bold">Extensive Network:</span> Connect with over 10,000 entrepreneurs & investors.
                    </li>
                    <li>
                      <span className="font-bold">First in Bharat:</span> Startup portal covering 4,000+ cities/towns in India.
                    </li>
                    <li>
                      <span className="font-bold">Funding Potential:</span> Tap into an expected ₹45 billion in funding by 2025.
                    </li>
                    <li>
                      <span className="font-bold">Ecosystem:</span> Platform designed to support and grow startups.
                    </li>
                  </ul>

                  <div className="mt-6">
                    <button className="px-3 py-2 bg-white border border-gray-500 rounded-full text-gray-800 hover:bg-gray-100">
                      Start A Project
                    </button>
                  </div>
                </div>
              </div>


        </div>
      </div>
  );
};

export default HomePage;
