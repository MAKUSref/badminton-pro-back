import express from "express";
import { getAllSingles } from "../controller/singles/getAllSingles";
import { getSingle } from "../controller/singles/getSingle";
import { addSingle } from "../controller/singles/addSingle";
import { removeSingle } from "../controller/singles/removeSingle";

const router = express.Router();

router.get("", getAllSingles);
router.get("/:id", getSingle);
router.post("", addSingle);
router.delete("/:id", removeSingle);

export default router;
