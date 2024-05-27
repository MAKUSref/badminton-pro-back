import { Request, Response } from "express";

import scheduleDetailsSchema, { GeneratedSchedule } from "../../model/Schedule";
import mongoose from "mongoose";
import matchSchema from "../../model/Match";

export const saveSchedule = async (
  req: Request<{}, {}, GeneratedSchedule>,
  res: Response
) => {
  const schedule = req.body.schedule;

  const matchesIds: mongoose.Types.ObjectId[][][] = [];

  try {
    for (let i = 0; i < schedule.length; i++) {
      const matchesInRound = schedule[i];
      matchesIds.push([]);
      for (let j = 0; j < matchesInRound.length; j++) {
        const matchesInCourt = matchesInRound[j];
        matchesIds[i].push([]);
        for (let k = 0; k < matchesInCourt.length; k++) {
          if (matchesInCourt[k]) {
            const matchId = new mongoose.Types.ObjectId();
            const match = new matchSchema({
              _id: matchId,
              ...matchesInCourt[k],
            });

            await match.save();

            matchesIds[i][j][k] = matchId;
          }

          // matchesIds[i][j][k] = matchId;
        }
      }
    }
    console.log("saved matches");

    const scheduleDetails = new scheduleDetailsSchema({
      id: new mongoose.Types.ObjectId(),
      schedule: matchesIds,
      courtCount: req.body.courtCount,
      rounds: req.body.rounds,
      endTime: req.body.endTime,
      startDate: req.body.startDate,
      startTime: req.body.startTime,
    });

    const savedScheduleDetails = await scheduleDetails.save();
    res.status(201).json(savedScheduleDetails);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
