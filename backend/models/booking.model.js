import mongoose from "mongoose";




const bookingSchema = new mongoose.Schema(
  {
    bookingReference: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
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
    travelDate: {
      type: Date,
      required: true,
    },
    seatNumber: {
      type: String,
      default: "",
      trim: true,
    },
    fare: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "USD",
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);


export default Booking;
