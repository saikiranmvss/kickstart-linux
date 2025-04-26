const mongoose = require("mongoose");

const ChatRequestSchema = new mongoose.Schema(
  {
    receiver_user_email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    sender_user_email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true, 
    },
    onboardingData: {
      type: Object, 
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ChatRequest", ChatRequestSchema);
