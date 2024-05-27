import { Request, Response } from "express";

import scheduleDetailsSchema, { GeneratedSchedule } from "../../model/Schedule";

export const getSchedule = async (
  req: Request<{}, {}, GeneratedSchedule>,
  res: Response
) => {
  return scheduleDetailsSchema
    .findOne()
    .then((schedule) => {
      res.status(201).json(schedule);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
