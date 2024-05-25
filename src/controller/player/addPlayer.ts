import PlayerSchema, { Player } from "../../model/Player";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const addPlayer = async (
  req: Request<{}, {}, Player>,
  res: Response
) => {
  const player = new PlayerSchema({
    id: new mongoose.Types.ObjectId(),
    ...req.body,
  });

  try {
    const player_1 = await player.save();
    res.status(201).json(player_1);
  } catch (error) {
    res.status(500).json(error);
  }
};
