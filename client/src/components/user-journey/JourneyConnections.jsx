
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaClock , FaRegComment , FaComments   } from "react-icons/fa";
import JourneySaveButton from "./journeySaveButton"

const JourneyConnections = () => {
    return (
        <div>
            <br />
           <h4><strong>Connect with investors and Enterpreneurs</strong></h4>
            <p>Join our vibrant startup community! Share your insights, discuss innovative ideas, educate and learn from peers, connect with like-minded entrepreneurs, and explore endless opportunities together. Let’s grow and succeed as a united force!</p>

            <div className="p-3" style={{ maxWidth: "500px" }}>
            <Card.Body>
                <small className="text-primary fw-bold">Angel Investors</small>
                <div className="d-flex align-items-center mt-2">
                <img
                    src="assets/images/users/avatar-1.jpg"
                    alt="Investor"
                    className="rounded-circle me-2 w-[50px] h-[50px] object-cover"
                />
                <div>
                    <Card.Title className="text-primary fw-bold m-0">
                    Mr. Investor Name
                    </Card.Title>
                    <Card.Text className="text-muted small mb-0">
                    Ed Tech | Fin Tech | Food Tech
                    </Card.Text>
                    <Card.Text className="text-muted small">Google | Facebook</Card.Text>
                </div>
                </div>
                <Card.Title className="mt-3">Earth Friendly Lifestyle Products</Card.Title>
                <Card.Text className="text-muted">
                products made by up-cycling crop-waste the place we feel safe and secure
                </Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                <div className="text-muted small d-flex align-items-center">
                    <FaClock className="me-1" /> 01:23 p.m. | 15th, Nov 2024
                </div>
                <Button className="border rounded-square px-3 bg-[#0d6efd]">
                    <FaComments className="text-blue-500 text-2xl text-white" />  View Message
                </Button>
                </div>
            </Card.Body>
            </div>

            
            <JourneySaveButton pageValue="06" />

        </div>
    )

}

    
export default JourneyConnections;
