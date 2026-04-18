import mongoose from "mongoose";

const ticketConformSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    passengerName: {
      type: String,
      required: true,
      trim: true,
    },
    passengerEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    flightNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    ticketNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    pnr: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      minlength: 6,
      maxlength: 6,
    },
    seatNumber: {
      type: String,
      default: "",
      trim: true,
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled", "used"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

const TicketConform = mongoose.model("TicketConform", ticketConformSchema);

export default TicketConform;
