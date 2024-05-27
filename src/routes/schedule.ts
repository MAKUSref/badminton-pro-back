import express from "express";
import { createSchedule } from "../controller/schedule/generateSchedule";
import { saveSchedule } from "../controller/schedule/saveSchedule";
import { getSchedule } from "../controller/schedule/getSchedule";

const router = express.Router();
router.post("", createSchedule);
router.post("/save", saveSchedule);
router.get("", getSchedule);

export default router;
