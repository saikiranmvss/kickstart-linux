import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaClock , FaRegComment  } from "react-icons/fa";

const JourneyInvestors = () => {

    return (
        <div>
            <br />
           <h4><strong>Investor Request List</strong></h4>
            <p>Send requests to as many investors as possible to increase visibility for your project. This helps investors discover opportunities aligned with their interests, increasing your chances of securing funding.</p>

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
                <Button variant="light" className="border rounded-pill px-3" disabled>
                <FaRegComment className="text-blue-500 text-2xl text-black" />  Request Pening
                </Button>
                </div>
            </Card.Body>
            </div>

        </div>
    )

}

    
export default JourneyInvestors;
