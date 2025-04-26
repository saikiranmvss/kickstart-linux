import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatBox from "../components/ChatBox";
import "../styles/Chats.css";

const Chats = () => {
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedChatUser, setSelectedChatUser] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));
    if (!token) return;
    const email = token.email;
    setCurrentUserEmail(email);

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/request/get-requests/${email}`)
      .then((res) => {
        const { sent, received } = res.data;
        // Combine both sent and received into one array for sidebar
        const formattedChats = [
          ...sent.map((item) => ({
            email: item.receiver_user_email,
            lastMessage: item.message,
          })),
          ...received.map((item) => ({
            email: item.sender_user_email,
            lastMessage: item.message,
          })),
        ];
        setChatUsers(formattedChats);
        console.log('chatusers',formattedChats);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching chat data:", err);
        setError("Failed to load chats.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h3>Loading chats...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="chats-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="sidebar-title">Chats</h4>
        <div className="chat-list">
          {chatUsers.map((user, index) => (
            <div
              key={index}
              className={`chat-user ${selectedChatUser?.email === user.email ? "active" : ""}`}
              onClick={() => setSelectedChatUser(user)}
            >
              <div className="user-avatar">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.email}`}
                  alt="User"
                />
              </div>
              <div className="user-info">
                <div className="user-email">{user.email}</div>
                {user.lastMessage && (
                  <div className="last-message">
                    <span>{user.lastMessage}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        {selectedChatUser ? (
          <ChatBox
            currentUserEmail={currentUserEmail}
            targetUserEmail={selectedChatUser.email}
          />
        ) : (
          <div className="no-chat-selected">
            <h3>Select a user to start chatting</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
