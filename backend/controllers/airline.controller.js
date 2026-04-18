import Airline from "../models/airline.model.js";



export const createAirline = async (req, res) => {
  try {
    const airline = await Airline.create(req.body);
    return res.status(201).json({ success: true, airline });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllAirlines = async (_req, res) => {
  try {
    const airlines = await Airline.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, airlines });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAirlineById = async (req, res) => {
  try {
    const airline = await Airline.findById(req.params.id);
    if (!airline) {
      return res.status(404).json({ success: false, message: "Airline not found" });
    }

    return res.status(200).json({ success: true, airline });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const updateAirline = async (req, res) => {
  try {
    const airline = await Airline.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!airline) {
      return res.status(404).json({ success: false, message: "Airline not found" });
    }

    return res.status(200).json({ success: true, airline });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteAirline = async (req, res) => {
  try {
    const airline = await Airline.findByIdAndDelete(req.params.id);
    if (!airline) {
      return res.status(404).json({ success: false, message: "Airline not found" });
    }

    return res.status(200).json({ success: true, message: "Airline deleted successfully" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
