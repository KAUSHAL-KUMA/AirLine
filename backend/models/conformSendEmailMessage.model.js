import mongoose from "mongoose";


const conformSendEmailMessageSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    ticketConform: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TicketConform",
      default: null,
    },
    toEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryStatus: {
      type: String,
      enum: ["queued", "sent", "failed"],
      default: "queued",
    },
    sentAt: {
      type: Date,
      default: null,
    },
    errorMessage: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const ConformSendEmailMessage = mongoose.model(
  "ConformSendEmailMessage",
  conformSendEmailMessageSchema
);

export default ConformSendEmailMessage;
