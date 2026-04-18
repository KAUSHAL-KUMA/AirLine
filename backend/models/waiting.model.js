import mongoose from "mongoose";



const waitingSchema = new mongoose.Schema(
  {
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
    travelDate: {
      type: Date,
      required: true,
    },
    fromAirport: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
    },
    toAirport: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
    },
    seatsRequested: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    status: {
      type: String,
      enum: ["waiting", "confirmed", "cancelled", "expired"],
      default: "waiting",
    },
    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Waiting = mongoose.model("Waiting", waitingSchema);



export default Waiting;
