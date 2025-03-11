import { useState } from "react";
import { Card, Button , Badge } from "react-bootstrap";
import { FaComment } from "react-icons/fa";

const JourneyCommunity = () => {

    return (
        <div>
            <br />
           <h4><strong>Connect with investors, Enterpreneurs and Users</strong></h4>
            <p>Collaborate and network with like-minded startups and investors who share your vision. This is the perfect space to build partnerships, exchange ideas, and find potential collaborators within your industry.</p>

            <div className="p-3" style={{ maxWidth: "500px" }}>
                <Card className="p-3 shadow-sm" style={{ maxWidth: "600px" }}>
                    <Card.Img
                        variant="top"
                        src="assets/images/bg.jpg"
                        alt="Group Discussion"
                        className="rounded"
                    />
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Badge bg="light" text="dark" className="px-3 py-2 border">
                        Eco-Friendly
                        </Badge>
                        <Button variant="primary" className="rounded-pill d-flex align-items-center px-3">
                        <FaComment className="me-2" /> View Messages
                        </Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )

}

    
export default JourneyCommunity;
