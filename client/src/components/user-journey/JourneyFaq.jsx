import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import JourneySaveButton from "./journeySaveButton";

const JourneyFaq = ({ journeyForm, setJourneyForm }) => {
  const [titleValue, setTitleValue] = useState("");
  const [subtitleValue, setSubtitleValue] = useState("");
  const [faqs, setFaqs] = useState([]); // State to store dynamic FAQs

  const maxLength = 60;
  const subtitleMaxLength = 135;

  useEffect(() => {
    // Preload existing FAQs from journeyForm
    if (journeyForm.faqData) {
      setFaqs(journeyForm.faqData);
    }
  }, [journeyForm.faqData]);

  const handleTitleChange = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    if (words.filter((word) => word !== "").length <= maxLength) {
      setTitleValue(e.target.value);
    }
  };

  const handleSubtitleChange = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    if (words.filter((word) => word !== "").length <= subtitleMaxLength) {
      setSubtitleValue(e.target.value);
    }
  };

  const addFaq = (e) => {
    e.preventDefault();
    if (titleValue.trim() === "" || subtitleValue.trim() === "") {
      alert("Both question title and answer are required.");
      return;
    }

    const newFaq = { id: Date.now(), question: titleValue, answer: subtitleValue };

    // Update FAQs state
    setFaqs((prev) => [...prev, newFaq]);

    // Update journeyForm state
    setJourneyForm((prev) => ({
      ...prev,
      faqData: [
        ...(prev.faqData || []),
        { id: newFaq.id, question: titleValue, answer: subtitleValue },
      ],
    }));

    // Clear input fields
    setTitleValue("");
    setSubtitleValue("");
  };

  const wordCount = titleValue.trim() === "" ? 0 : titleValue.trim().split(/\s+/).length;
  const subtitleWordCount = subtitleValue.trim() === "" ? 0 : subtitleValue.trim().split(/\s+/).length;

  return (
    <div className="journey-faq">
      <br />
      <h4>
        <strong>Frequently Asked Questions (FAQs)</strong>
      </h4>
      <p>
        The FAQ section provides answers to common questions from investors and users, helping them understand your startup better. As an entrepreneur, keep it updated to address key concerns and build trust.
      </p>

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
            value={subtitleValue}
            onChange={handleSubtitleChange}
          ></textarea>
          <small className="text-muted float-right">
            {subtitleWordCount}/{subtitleMaxLength} Words
          </small>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-primary w-50" onClick={addFaq}>
            Submit
          </button>
        </div>
      </div>

      <br />
      <h4>Added FAQs</h4>
      <br />
      <div className="p-4 text-center bg-white shadow-sm rounded row">
        <Accordion className="w-100">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} className="border-0" key={faq.id}>
              <Accordion.Header className="border-0 bg-transparent">
                <span className="fw-bold">{faq.question}</span>
              </Accordion.Header>
              <Accordion.Body className="border-0 bg-transparent">
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <JourneySaveButton
        pageValue="05"
        nextPageName="end"
        journeyForm={journeyForm}
        setJourneyForm={setJourneyForm}
      />
    </div>
  );
};

export default JourneyFaq;
