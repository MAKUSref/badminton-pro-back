import PlayerSchema, { Player } from "../../model/Player";
import { Request, Response } from "express";

export const updatePlayer = (
  req: Request<{ id: string }, {}, Player>,
  res: Response
) => {
  return PlayerSchema.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
