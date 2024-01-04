import express from "express";
import { createSchedule } from "../controller/matches/generateSchedule";

const router = express.Router();
router.post("", createSchedule);

export default router;
