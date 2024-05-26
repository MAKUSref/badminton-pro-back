import { Request, Response } from "express";
import { initPlayers } from "../../data/players";

export const addAllPlayers = async (req: Request, res: Response) => {
  try {
    await initPlayers();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json(error);
  }
};
