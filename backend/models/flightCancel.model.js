import mongoose from "mongoose";



const flightCancelSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    airline: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Airline",
      required: true,
    },
    departureAirport: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
    },
    arrivalAirport: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
    },
    scheduledDepartureTime: {
      type: Date,
      required: true,
    },
    cancellationTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
    reason: {
      type: String,
      default: "",
      trim: true,
    },
    refundStatus: {
      type: String,
      enum: ["pending", "processed", "failed", "not_applicable"],
      default: "pending",
    },
    status: {
      type: String,
      enum: ["cancelled", "reinstated"],
      default: "cancelled",
    },
  },
  { timestamps: true }
);

const FlightCancel = mongoose.model("FlightCancel", flightCancelSchema);



export default FlightCancel;
