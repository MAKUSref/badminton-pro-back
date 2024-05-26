import express from "express";
import { getAllSingles } from "../controller/singles/getAllSingles";
import { getSingle } from "../controller/singles/getSingle";
import { addSingle } from "../controller/singles/addSingle";
import { removeSingle } from "../controller/singles/removeSingle";
import { addManySingles } from "../controller/singles/addManySingles";

const router = express.Router();

router.get("", getAllSingles);
router.get("/:id", getSingle);
router.post("", addSingle);
router.post("/addMany", addManySingles);
router.delete("/:id", removeSingle);

export default router;
