import mongoose from "mongoose";



const flightDelaySchema = new mongoose.Schema(
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
    estimatedDepartureTime: {
      type: Date,
      required: true,
    },
    delayMinutes: {
      type: Number,
      required: true,
      min: 0,
    },
    reason: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "resolved", "cancelled"],
      default: "active",
    },
  },
  { timestamps: true }
);

const FlightDelay = mongoose.model("FlightDelay", flightDelaySchema);



export default FlightDelay;
