// require('dotenv').config();

import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import playersRoutes from "./routes/Player";
import groupRoutes from "./routes/Group";
import singleRoutes from "./routes/Single";
import tournamentRoutes from "./routes/Tournament";
import scheduleRoutes from "./routes/schedule";
import matchesRoutes from "./routes/Match";
import { database } from "./config/database";
import { RegisterStatus } from "./model/common";
import { LocalStorage } from "node-localstorage";

export const REGISTER_STATE_KEY = "register-state";
export const localStorage = new LocalStorage("./scratch");

dotenv.config();
database.config();

const app = express();

localStorage.setItem(REGISTER_STATE_KEY, RegisterStatus.ADMIN_REGISTER);

app.use(cors());
app.use(express.json());
app.use("/players", playersRoutes);
app.use("/groups", groupRoutes);
app.use("/singles", singleRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/matches", matchesRoutes);
app.use("/tournament", tournamentRoutes);
app.get("/registerStatus", (_req: Request, res: Response) => {
  const registerStatus =
    localStorage.getItem(REGISTER_STATE_KEY) ?? RegisterStatus.NO_GROUPS;
  res.send({ registerStatus });
});

app.post(
  "/registerStatus",
  (req: Request<{}, {}, { registerStatus: RegisterStatus }>, res: Response) => {
    const registerStatus = req.body.registerStatus;
    localStorage.setItem(REGISTER_STATE_KEY, registerStatus);
    res.send({ registerStatus });
  }
);

app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});
