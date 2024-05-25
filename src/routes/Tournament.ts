import express from "express";
import { getTournament } from "../controller/tournament/getTournament";

const router = express.Router();

router.get("", getTournament);

export default router;
