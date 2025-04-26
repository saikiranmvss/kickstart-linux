const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: [String], // store email/userId of participants
  },
  { timestamps: true , strict:false }
);

module.exports = mongoose.model("Chat", chatSchema);