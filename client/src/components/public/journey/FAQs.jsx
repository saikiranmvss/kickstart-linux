import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = ({ journey }) => {
  if (!journey?.faqData || journey.faqData.length === 0) {
    return <p className="text-center text-gray-500">No FAQs available.</p>;
  }

  return (
    <div className="container mt-4 public-faq">
      <div className="p-4 text-center bg-white rounded row">
        <h2 className="mb-4 fw-bold">Frequently Asked Questions</h2>
        <Accordion className="w-100">
          {journey.faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} className="border-0" key={index}>
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
    </div>
  );
};

export default FAQs;
