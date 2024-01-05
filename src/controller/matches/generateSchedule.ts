import { Request, Response } from "express";
import { generateSingleSchedule } from "../../utils/generateSchedule/generateSingleSchedule";
import SingleSchema, { Single } from "../../model/record/Single";

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

    // console.log(singles);

    const schedule = await generateSingleSchedule(
      singles as unknown as Single[],
      startTime,
      endTime,
      startDate,
      courtCount
    );

    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json(error);
  }
};
