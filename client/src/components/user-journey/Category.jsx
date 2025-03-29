import { useState , useEffect } from "react";
import VideoEmbed from './VideoEmbed';
import DateInput from '../datePicker';
import JourneySaveButton from "./journeySaveButton"

const JourneyCategory = ({ journeyForm, setJourneyForm }) => {

    const [titleValue, setTitleValue] = useState(journeyForm.catTitle);
    const [SubtitleValue, setSubTitleValue] = useState(journeyForm.catSubtitle);
    const maxLength = 60;
    const SubTitlemaxLength = 135;

    useEffect(()=>{
        console.log(journeyForm);
    })

    const handleTitleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.filter(word => word !== "").length <= maxLength) {
            setTitleValue(e.target.value);
            setJourneyForm(prevForm => ({...prevForm,catTitle: e.target.value }))
        }
    };

    const handleSubTitleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.filter(word => word !== "").length <= SubTitlemaxLength) {
            setSubTitleValue(e.target.value);
            setJourneyForm(prevForm => ({...prevForm,catSubtitle: e.target.value }))
        }
      };

      const wordCount = titleValue.trim() === "" ? 0 : titleValue.trim().split(/\s+/).length;
      const SubTitlewordCount = SubtitleValue.trim() === "" ? 0 : SubtitleValue.trim().split(/\s+/).length;

    return (
        <div>
                   <br />
           <h4><strong>Get Started</strong></h4>

            <h5>You're prelaunch few steps away.</h5>
            <br />

            <h6><strong>Choosing The Right Category</strong></h6>

            <p>Select a primary category and subcategory to help backers find your project. A second subcategory provides tailored guidance but won't appear on your project page or affect search results.

            You can update your selection anytime before or during your campaign to better match your project's focus.</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-6 text-left mb-4">
                    <label htmlFor="primary-cat">Primary Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" value={journeyForm.catPrimaryCategory} onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catPrimaryCategory: e.target.value }))}>
                    <option value="1">Select Primary Category</option>
                    <option value="2">Technology</option>
                    <option value="3">E-commerce</option>
                    <option value="4">Education</option>
                    <option value="5">Healthcare</option>
                    <option value="6">Entertainment</option>
                    <option value="7">Real Estate</option>
                    <option value="8">Travel & Hospitality</option>
                    <option value="9">Food & Beverage</option>
                    <option value="10">Finance</option>
                    <option value="11">Art & Design</option>
                    <option value="12">Manufacturing</option>
                    <option value="13">Other</option>
                    </select>
                </div>
                <div className="col-md-6 text-left mb-4">
                    <label htmlFor="primary-cat">Primary Sub-Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" value={journeyForm.catPrimarySubCategory} onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catPrimarySubCategory: e.target.value }))}>
                    <option value="14">Select Primary Subcategory</option>
                    <optgroup label="Technology">
                    <option value="15">Software Development</option>
                    <option value="16">IT Services</option>
                    <option value="17">SaaS</option>
                    <option value="18">AI & Machine Learning</option>
                    <option value="19">Blockchain</option>
                    </optgroup>
                    <optgroup label="E-commerce">
                    <option value="20">Online Store</option>
                    <option value="21">Marketplaces</option>
                    <option value="22">Dropshipping</option>
                    <option value="23">B2B E-commerce</option>
                    </optgroup>
                    </select>
                </div>
                <div className="col-md-6 text-left">
                    <label htmlFor="primary-cat">Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" value={journeyForm.catCategory} onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catCategory: e.target.value }))}>
                    <option value="24">Select Category</option>
                    <option value="25">Portfolio Website</option>
                    <option value="26">Blog</option>
                    <option value="27">Corporate Website</option>
                    <option value="28">E-commerce Store</option>
                    <option value="29">Service Marketplace</option>
                    <option value="30">Community Platform</option>
                    <option value="31">Informational Website</option>
                    <option value="32">Landing Page</option>
                    <option value="33">Event Website</option>
                    <option value="34">Subscription Platform</option>
                    <option value="35">Forum</option>
                    </select>
                </div>
                <div className="col-md-6 text-left">
                    <label htmlFor="primary-cat">Sub Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" value={journeyForm.catSubCategory} onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catSubCategory: e.target.value }))}>
                    <option value="36">Select Subcategory</option>
                    <optgroup label="Portfolio Website">
                    <option value="37">Photographer</option>
                    <option value="38">Artist</option>
                    <option value="39">Designer</option>
                    <option value="40">Developer</option>
                    </optgroup>
                    <optgroup label="Blog">
                    <option value="41">Travel Blog</option>
                    <option value="42">Food Blog</option>
                    <option value="43">Technology Blog</option>
                    <option value="44">Personal Blog</option>
                    </optgroup>
                    <optgroup label="E-commerce Store">
                    <option value="45">Fashion</option>
                    <option value="46">Electronics</option>
                    <option value="47">Groceries</option>
                    <option value="48">Handmade Products</option>
                    </optgroup>
                    </select>
                </div>
            </div>
            <br />
            <h6><strong>Project Location</strong></h6>

            <p>Make sure you select the right location where your project is based</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label htmlFor="project-location">Location</label>
                    <select className="form-select"  name="project-location" id="project-location" onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catLocation: e.target.value }))}>
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    </select>
                </div>
            </div>

            <br />
            <h6><strong>Project Title & Subtitle</strong></h6>

            <p>Create a clear and concise title that instantly communicates your project`s purpose. Add a brief subtitle to provide more context.</p>

            <p>Both will be visible on your project page, pre-launch page,category listings, search results, and promotional emails sent to potential backers. A strong title improves visibility and engagement!</p>

            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titleValue}
                        onChange={handleTitleChange}
                    />
                    <small className="text-muted float-right">
                        {wordCount}/{maxLength} characters
                    </small>
                </div>
                <br />
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Sub Title</label>
                    <textarea
                        rows={4}
                        className="form-control"                    
                        value={SubtitleValue}
                        onChange={handleSubTitleChange}
                    ></textarea>
                    <small className="text-muted float-right">
                        {SubTitlewordCount}/{SubTitlemaxLength} characters
                    </small>
                </div>

            </div>

            <br />
            <h6><strong>Only Youtube Or Vimeo</strong></h6>
            <p><strong>Only YouTube or Vimeo video URLs are allowed.</strong></p>
            <ul>
                <li>Videos must have clear audio and high-definition video quality for the best user experience. </li>
                <li>The video must be owned by the creator and free from copyright restrictions.</li>
                <li> Only publicly available videos can be embedded—private or restricted content will not work. </li>
                <li>Ensure your video meets these guidelines to provide a seamless and engaging experience for your audience!</li>
            </ul>

            <VideoEmbed setJourneyForm = {setJourneyForm} videoKey="catVideo" videoData={journeyForm.catVideo}  />
            
            <br />

            <h6><strong>How Old Is Your Startup</strong></h6>
            <p>Track its journey from the first idea to ideation, MVP development, market testing, and validation.</p>
            <p>"A startup's age isn't just about launch--it's about the evolution from concept, research, and prototypes to real-world market impact."</p>

            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-6 text-left mb-4">
                    <DateInput setJourneyForm={setJourneyForm} dateKey="catStartUpBeginDate" dateData={journeyForm.catStartUpBeginDate} />
                </div>
                <p>This will give a clarity showcase to the investors , how old is the idea. Which will investors will have a clarity for investment of revenue statistics.</p>
            </div>
            <br />

            <h6>Startup Target Launch Date</h6>

            <p>Set a target launch date to plan your project timeline effectively. We'll guide you on key steps that may take time to complete.</p>

            <p>You can adjust this date anytime before launching your project, but the final launch must be done manually.</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
            <div className="col-md-6 text-left mb-4">
                    <DateInput setJourneyForm={setJourneyForm} dateKey="catStartUpLaunchDate" dateData={journeyForm.catStartUpLaunchDate} />
                </div>
                <p>This will give a clarity showcase to the investors , how old is the idea. Which will investors will have a clarity for investment of revenue statistics.</p>
            </div>

            <JourneySaveButton pageValue="01" nextPageName='MyJourney' journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />

        </div>
    );
};

export default JourneyCategory;
