import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import JourneySaveButton from "./journeySaveButton"

const JourneyFaq = ({ journeyForm, setJourneyForm }) => {

    const [titleValue, setTitleValue] = useState("");
    const [SubtitleValue, setSubTitleValue] = useState("");
    const maxLength = 60;
    const SubTitlemaxLength = 135;
  
    const handleTitleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.filter(word => word !== "").length <= maxLength) {
            setTitleValue(e.target.value);
        }
    };

    const handleSubTitleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.filter(word => word !== "").length <= SubTitlemaxLength) {
            setSubTitleValue(e.target.value);
        }
      };

      const wordCount = titleValue.trim() === "" ? 0 : titleValue.trim().split(/\s+/).length;
      const SubTitlewordCount = SubtitleValue.trim() === "" ? 0 : SubtitleValue.trim().split(/\s+/).length;

    return (
        <div className="journey-faq">
        <br />
       <h4><strong>Frequently Asked Questions (FAQs)</strong></h4>
        <p>The FAQ section provides answers to common questions from investors and users, helping them understand your startup better. As an entrepreneur, keep it updated to address key concerns and build trust.</p>

        <div className="p-4 text-center bg-white shadow-sm rounded row">
            <div className="col-md-12 text-left mb-4">
                <label className="form-label">Question Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={titleValue}
                    onChange={handleTitleChange}
                />
                <small className="text-muted float-right">
                    {wordCount}/{maxLength} Words
                </small>
            </div>
            <br />
            <div className="col-md-12 text-left mb-4">
                <label className="form-label">Answer</label>
                <textarea
                    rows={4}
                    className="form-control"                    
                    value={SubtitleValue}
                    onChange={handleSubTitleChange}
                ></textarea>
                <small className="text-muted float-right">
                    {SubTitlewordCount}/{SubTitlemaxLength} Words
                </small>
            </div>

        </div>

        <br />
        <h4>Added FAQ`s</h4>

        <br />
        <div className="p-4 text-center bg-white shadow-sm rounded row">
            <Accordion className="w-100">
                <Accordion.Item eventKey="0" className="border-0">
                    <Accordion.Header className="border-0 bg-transparent">
                        <span className="fw-bold">What is a Startup??</span>
                    </Accordion.Header>
                    <Accordion.Body className="border-0 bg-transparent">
                    A startup is a young company founded to develop a unique product or service, bring it to market, and make it irresistible and irreplaceable for customers. Startups typically aim to innovate and scale rapidly.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

        
        <JourneySaveButton pageValue="05" journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />

    </div>
    )

}

    
export default JourneyFaq;
