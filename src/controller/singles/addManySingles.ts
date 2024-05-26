import mongoose from "mongoose";
import SingleSchema, { Single } from "../../model/Single";
import UserSchema from "../../model/Player";
import { Request, Response } from "express";

export const addManySingles = async (
  req: Request<{}, {}, Single[]>,
  res: Response
) => {
  const singles = req.body;

  try {
    for (let i = 0; i < singles.length; i++) {
      const singleSchema = new SingleSchema({
        id: new mongoose.Types.ObjectId(),
        ...singles[i],
      });

      await UserSchema.findByIdAndUpdate(singleSchema.playerId, {
        singleId: singleSchema.id,
      });

      await singleSchema.save();
    }

    res.status(201).json({ message: "success!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
