const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    sender: { type: String, required: true }, // use email or userId
    receiver: { type: String, required: true },
    text: { type: String, strict:false ,  required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);