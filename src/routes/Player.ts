import { getPlayer } from "../controller/player/getPlayer";
import {
  getAllPlayers,
  getAllPlayersAvailableForSingle,
} from "../controller/player/getAllPlayers";
import { addPlayer } from "../controller/player/addPlayer";
import { updatePlayer } from "../controller/player/updatePlayer";
import express from "express";
import { addAllPlayers } from "../controller/player/addAllPlayers";

const router = express.Router();

router.get("/availableForSingle", getAllPlayersAvailableForSingle);
router.get("", getAllPlayers);
router.get("/:id", getPlayer);
router.post("", addPlayer);
router.post("/addAll", addAllPlayers);
router.put("/:id", updatePlayer);

export default router;
