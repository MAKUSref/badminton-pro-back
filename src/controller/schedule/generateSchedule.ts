import { Request, Response } from "express";
import { generateSchedule } from "../../utils/generateSchedule/generateSchedule";
import SingleSchema, { Single } from "../../model/Single";
import { GeneratedSchedule } from "../../model/Schedule";

interface ScheduleForm {
  startDate: string;
  courtCount: number;
  startTime: string;
  endTime: string;
}

export const createSchedule = async (
  req: Request<{}, {}, ScheduleForm>,
  res: Response
) => {
  const { courtCount, endTime, startDate, startTime } = req.body;

  try {
    const singles = await SingleSchema.find();

    const schedule = await generateSchedule(
      singles as unknown as Single[],
      startTime,
      endTime,
      startDate,
      courtCount
    );

    const generatedSchedule: GeneratedSchedule = {
      schedule,
      startTime,
      endTime,
      startDate,
      courtCount,
      rounds: schedule.length,
    };

    res.status(201).json(generatedSchedule);
  } catch (error) {
    res.status(500).json(error);
  }
};
