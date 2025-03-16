import { useState } from "react";
import VideoEmbed from './VideoEmbed';
import DateInput from '../datePicker';
import JourneySaveButton from "./journeySaveButton"

const JourneyCategory = ({ journeyForm, setJourneyForm }) => {

    const [titleValue, setTitleValue] = useState("");
    const [SubtitleValue, setSubTitleValue] = useState("");
    const maxLength = 60;
    const SubTitlemaxLength = 135;
  
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
                    <select className="form-select" name="primary-cat" id="primary-cat" onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catPrimaryCategory: e.target.value }))}>
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
                    </select>
                </div>
                <div className="col-md-6 text-left mb-4">
                    <label htmlFor="primary-cat">Primary Sub-Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catPrimarySubCategory: e.target.value }))}>
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
                    </select>
                </div>
                <div className="col-md-6 text-left">
                    <label htmlFor="primary-cat">Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catCategory: e.target.value }))}>
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
                    </select>
                </div>
                <div className="col-md-6 text-left">
                    <label htmlFor="primary-cat">Sub Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat" onChange={(e) => setJourneyForm(prevForm => ({...prevForm,catSubCategory: e.target.value }))}>
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
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
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
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

            <VideoEmbed setJourneyForm = {setJourneyForm} videoKey="catVideo"  />
            
            <br />

            <h6><strong>How Old Is Your Startup</strong></h6>
            <p>Track its journey from the first idea to ideation, MVP development, market testing, and validation.</p>
            <p>"A startup's age isn't just about launch--it's about the evolution from concept, research, and prototypes to real-world market impact."</p>

            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-6 text-left mb-4">
                    <DateInput setJourneyForm={setJourneyForm} dateKey="catStartUpBeginDate" />
                </div>
                <p>This will give a clarity showcase to the investors , how old is the idea. Which will investors will have a clarity for investment of revenue statistics.</p>
            </div>
            <br />

            <h6>Startup Target Launch Date</h6>

            <p>Set a target launch date to plan your project timeline effectively. We'll guide you on key steps that may take time to complete.</p>

            <p>You can adjust this date anytime before launching your project, but the final launch must be done manually.</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
            <div className="col-md-6 text-left mb-4">
                    <DateInput setJourneyForm={setJourneyForm} dateKey="catStartUpLaunchDate" />
                </div>
                <p>This will give a clarity showcase to the investors , how old is the idea. Which will investors will have a clarity for investment of revenue statistics.</p>
            </div>

            <JourneySaveButton pageValue="01" nextPageName='MyJourney' journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />

        </div>
    );
};

export default JourneyCategory;
