import React, { useEffect, useState, useRef } from "react";
import socket from "../services/socket";
import axios from "axios";
import "../styles/ChatBox.css";

const ChatBox = ({ currentUserEmail, targetUserEmail }) => {
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimerRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]); 
  
  useEffect(() => {
    if (chatId) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
      }, 0);
    }
  }, [chatId]);

  useEffect(() => {
    console.log("Adding user to socket:", currentUserEmail);
    console.log("Adding other to socket:", targetUserEmail);
    socket.emit("add-user", currentUserEmail);

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/chat/create`, {
        sender: currentUserEmail,
        receiver: targetUserEmail,
      })
      .then((res) => {
        const newChatId = res.data._id; 
        setChatId(newChatId);
        console.log(newChatId);
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/chat/messages/${res.data._id}`);
      })
      .then((res) => {
        // Expecting server to return an array of { text, sender, timestamp }
        setMessages(res.data);
      })
      .catch((err) => console.error("Error loading chat messages", err));
  }, [currentUserEmail, targetUserEmail]);

  useEffect(() => {
    if (!chatId) return;

    socket.on("msg-receive", (data) => {
      console.log("msg-receive",data)
      if (data.chatId === chatId) {
        setMessages((prev) => [...prev, {
          text: data.text,
          sender: data.from,
          timestamp: data.timestamp
        }]);
        console.log(messages)
      }
    });
    
    socket.on("msg-sent", (data) => {
      console.log("msg-sent",data)
      if (data.chatId === chatId) {
        setMessages((prev) => [...prev, {
          text: data.text,
          sender: data.from,
          timestamp: data.timestamp
        }]);
        console.log(messages)
      }
    });

    socket.on("typing", ({ from }) => {
      if (from === targetUserEmail) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
      }
    });

    return () => {
      socket.off("msg-receive");
      socket.off("msg-sent");
      socket.off("typing");
    };
  }, [chatId, targetUserEmail]);

  const sendMessage = () => {
    if (text.trim() === "") return;

    const messageData = {
      chatId,
      from: currentUserEmail,
      to: targetUserEmail,
      message: text,
    };

    console.log('manual',messageData)

    socket.emit("send-msg", messageData);

    // Don't manually add to list; wait for "msg-sent" for perfect sync
    setText("");
  };

  const handleTyping = (e) => {
    setText(e.target.value);
  
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
  
    typingTimerRef.current = setTimeout(() => {
      socket.emit("typing", {
        chatId,
        from: currentUserEmail,
        to: targetUserEmail,
      });
    }, 300); // Emit only after 300ms after user stops typing
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender === currentUserEmail ? "sent" : "received"}`}
          >
            <span className="msg-text">{msg.text}</span>
            <span className="msg-time">
              {msg.timestamp && new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        ))}
        {isTyping && <div className="typing-indicator">{targetUserEmail} is typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={text}
          placeholder="Type your message..."
          onChange={handleTyping}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
