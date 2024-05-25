import TournamentSchema, { Tournament } from "../../model/Tournament";
import { Request, Response } from "express";

export const getTournament = (
  req: Request<void>,
  res: Response<Tournament>
) => {
  return TournamentSchema.findOne()
    .then((tournament) => {
      res.status(201).json(tournament?.toJSON());
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
