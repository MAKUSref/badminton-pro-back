import PlayerSchema from "../../model/Player";
import { Request, Response } from "express";

export const getPlayer = (req: Request<{ id: string }>, res: Response) => {
  return PlayerSchema.findById(req.params.id)
    .then((group) => {
      res.status(201).json(group);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
