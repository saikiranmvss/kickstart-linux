const Message = require("../models/Message");

const onlineUsers = new Map(); // userId (or email) -> socketId

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("✅ A user connected:", socket.id);

    // Save user to online users map
    socket.on("add-user", (userId) => {
      if (userId) {
        onlineUsers.set(userId, socket.id);
        console.log(`User ${userId} added with socket ${socket.id}`);
      }
    });

    socket.on("typing", ({ chatId, from, to }) => {
      console.log(`${from} is typing to ${to}`);
      
      // Find the target user's socket and emit "typing"
      const targetSocketId = getUserSocketId(to); // You should have a way to get socketId by email
    
      if (targetSocketId) {
        io.to(targetSocketId).emit("typing", { from });
      }
    });

    // Handle sending message
    socket.on("send-msg", async (data) => {
      console.log('first',data)
      try {
        const { chatId, from, to, message } = data;
        console.log('second',{
          chatId,
          sender: from,
          receiver: to,
          text: message,
          timestamp: new Date(),
        })
        const newMessage = new Message({
          chatId,
          sender: from,
          receiver: to,
          text: message,
          timestamp: new Date(),
        });

        const savedMessage = await newMessage.save();
        console.log(savedMessage);

        // Emit message to receiver if online
        const receiverSocketId = onlineUsers.get(to);
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("msg-receive", {
            _id: savedMessage._id,
            chatId: savedMessage.chatId,
            from: savedMessage.sender,
            to: savedMessage.receiver,
            text: savedMessage.text,
            timestamp: savedMessage.timestamp,
          });
        }

        // Emit message back to sender also (optional, can help in syncing UI)
        const senderSocketId = onlineUsers.get(from);
        if (senderSocketId) {
          io.to(senderSocketId).emit("msg-sent", {
            _id: savedMessage._id,
            chatId: savedMessage.chatId,
            from: savedMessage.sender,
            to: savedMessage.receiver,
            text: savedMessage.text,
            timestamp: savedMessage.timestamp,
          });
        }
      } catch (error) {
        console.error("Error in send-msg:", error);
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      for (let [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          console.log(`❌ User ${userId} disconnected`);
          break;
        }
      }
    });
  });
};

function getUserSocketId(email) {
  return onlineUsers.get(email);
}
