import express from "express";
import {createAirline,getAllAirlines,getAirlineById,updateAirline,deleteAirline,} from "../controllers/airline.controller.js";


const router = express.Router();

router.post("/", createAirline);

router.get("/", getAllAirlines);

router.get("/:id", getAirlineById);

router.put("/:id", updateAirline);

router.delete("/:id", deleteAirline);



export default router;
