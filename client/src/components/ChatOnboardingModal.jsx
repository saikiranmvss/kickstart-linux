import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; 

const ChatOnboardingModal = ({ show, handleClose, project }) => {
  console.log(project);
  const [role, setRole] = useState("");
  const [answers, setAnswers] = useState({ interest: "", goal: "" });
  const [chatStarted, setChatStarted] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleStartChat = () => {
    setChatStarted(true);
  };

  const handleSend = async () => {
    const token = localStorage.getItem("accessToken");
  
    if (!token) {
      toast.error("User not authenticated.");
      return;
    }
  
    let sender_user_email;
    try {
      const decoded = jwtDecode(token);
      sender_user_email = decoded.email;
    } catch (err) {
      console.log(err);
      toast.error("Invalid token.");
      return;
    }
  
    const payload = {
      sender_user_email,
      project_id: project?._id,
      receiver_user_email: project?.email,
      onboardingData: {
        role,
        interest: answers.interest,
        goal: answers.goal,
      },
      message,
    };
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/request/store`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        toast.success(response.data.message || "Message sent successfully!");
        handleClose();
        resetForm();
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error("Send message error:", error);
    }
  };
  

  const resetForm = () => {
    setRole("");
    setAnswers({ interest: "", goal: "" });
    setMessage("");
    setChatStarted(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{chatStarted ? "Send Message" : "Start Conversation"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!chatStarted ? (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Who are you?</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select...</option>
                <option value="user">User</option>
                <option value="entrepreneur">Entrepreneur</option>
                <option value="investor">Investor</option>
              </Form.Select>
            </Form.Group>

            {role && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>What are you looking for?</Form.Label>
                  <Form.Control
                    name="interest"
                    type="text"
                    value={answers.interest}
                    onChange={handleInputChange}
                    placeholder="E.g., Collaboration, Funding..."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your goals from this conversation?</Form.Label>
                  <Form.Control
                    name="goal"
                    type="text"
                    value={answers.goal}
                    onChange={handleInputChange}
                    placeholder="E.g., Understand project, pitch an idea..."
                  />
                </Form.Group>
              </>
            )}
          </Form>
        ) : (
          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
          </Form.Group>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        {!chatStarted ? (
          <Button
            variant="primary"
            onClick={handleStartChat}
            disabled={!role || !answers.interest || !answers.goal}
          >
            Start Chat
          </Button>
        ) : (
          <Button variant="success" onClick={handleSend} disabled={!message.trim()}>
            Send
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ChatOnboardingModal;
