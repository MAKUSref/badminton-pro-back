import { REGISTER_STATE_KEY } from "../..";
import { RegisterStatus } from "../../model/common";
import { Request, Response } from "express";

export const confirmPlayers = async (_req: Request, res: Response) => {
  localStorage.setItem(REGISTER_STATE_KEY, RegisterStatus.REGISTER_PLAYERS);

  res.status(201);
};
