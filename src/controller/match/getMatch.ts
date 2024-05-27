import MatchSchema from "../../model/Match";
import { Request, Response } from "express";

export const getMatch = (req: Request<{ id: string }>, res: Response) => {
  return MatchSchema.findById(req.params.id)
    .then((group) => {
      res.status(201).json(group);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
