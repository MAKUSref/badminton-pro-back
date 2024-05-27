import { getMatch } from "../controller/match/getMatch";
import { updateMatch } from "../controller/match/updateMatch";
import express from "express";

const router = express.Router();

router.get("/:id", getMatch);
router.put("/:id", updateMatch);

export default router;
