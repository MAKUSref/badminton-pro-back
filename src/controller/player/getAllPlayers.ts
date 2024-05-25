import PlayerSchema from "../../model/Player";
import { Request, Response } from "express";
import { Gender } from "../../model/common";

export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const players = await PlayerSchema.find();
    res.status(201).json(players);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPlayersAvailableForSingle = async (
  req: Request<{}, { gender: Gender }, {}>,
  res: Response
) => {
  try {
    const gender = req.query.gender;
    const filter = gender
      ? {
          gender,
          singleId: undefined,
        }
      : { singleId: undefined };

    const players = await PlayerSchema.find(filter);
    res.status(201).json(players);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
