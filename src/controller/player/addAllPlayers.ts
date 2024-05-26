import PlayerSchema, { Player } from "../../model/Player";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { initPlayers } from "../../data/players";

export const addAllPlayers = async (req: Request, res: Response) => {
  try {
    initPlayers();
  } catch (error) {
    res.status(500).json(error);
  }
};
