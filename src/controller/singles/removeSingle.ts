import SingleSchema from "../../model/Single";
import UserSchema from "../../model/Player";
import { Request, Response } from "express";

export const removeSingle = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    console.log(req.params.id);

    const playerToEdit = await UserSchema.findOne({ singleId: req.params.id });
    await UserSchema.findByIdAndUpdate(playerToEdit?.id, {
      singleId: null,
    });

    // console.log({ updatedPlayer: player });

    const singleRes = await SingleSchema.findByIdAndDelete(req.params.id);
    res.status(201).json(singleRes);
  } catch (error) {
    res.status(500).json(error);
  }
};
