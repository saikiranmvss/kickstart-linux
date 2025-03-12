import { useState } from "react";
import { Card, Button , Badge } from "react-bootstrap";
import { FaComments } from "react-icons/fa";
import JourneySaveButton from "./journeySaveButton"

const JourneyCommunity = ({ journeyForm, setJourneyForm }) => {

    return (
        <div>
            <br />
           <h4><strong>Connect with investors, Enterpreneurs and Users</strong></h4>
            <p>Collaborate and network with like-minded startups and investors who share your vision. This is the perfect space to build partnerships, exchange ideas, and find potential collaborators within your industry.</p>

            <div className="p-3" style={{ maxWidth: "500px" }}>
                <div className="p-3" style={{ maxWidth: "600px" }}>
                    <Card.Img
                        variant="top"
                        src="assets/images/bg.jpg"
                        alt="Group Discussion"
                        className="rounded"
                    />
                    <Card.Body className="mt-3 d-flex justify-content-between align-items-center">
                        <Badge bg="light" text="dark" className="rounded-pill px-3 py-2 border">
                        Eco-Friendly
                        </Badge>
                        <Button variant="primary" className="d-flex align-items-center px-3">
                            <FaComments className="me-2" /> View Messages
                        </Button>
                    </Card.Body>
                </div>
            </div>

            
            <JourneySaveButton pageValue="07" journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />

        </div>
    )

}

    
export default JourneyCommunity;
