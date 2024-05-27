import MatchSchema, { Match } from "../../model/Match";
import { Request, Response } from "express";

export const updateMatch = (
  req: Request<{ id: string }, {}, Match>,
  res: Response
) => {
  return MatchSchema.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
