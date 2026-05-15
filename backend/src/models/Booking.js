import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

  ticketType: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
  },

  total: {
    type: Number,
    required: true,
  },

  paymentId: {
    type: String,
  },

  status: {
    type: String,
    default: "pending",
  },

}, {
  timestamps: true,
});

const Booking = mongoose.model(
  "Booking",
  bookingSchema
);

export default Booking;