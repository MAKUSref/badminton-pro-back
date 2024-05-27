import { Match, matchSchema } from "./Match";
import mongoose, { Schema, Types } from "mongoose";
import { Schedule } from "./common";

export interface GeneratedSchedule {
  schedule: Match[][][];
  startTime: string;
  endTime: string;
  courtCount: number;
  startDate: string;
  rounds: number;
}

export interface ScheduleDetails {
  schedule: Types.ObjectId[][][];
  startTime: string;
  endTime: string;
  courtCount: number;
  startDate: string;
  rounds: number;
}

export interface ScheduleModel extends ScheduleDetails, Document {}

const scheduleDetailsSchema = new mongoose.Schema<ScheduleDetails>({
  schedule: {
    type: [[[Schema.Types.ObjectId]]],
    required: false,
    ref: "Match",
  },
  endTime: { type: String, required: true },
  startDate: { type: String, required: true },
  startTime: { type: String, required: true },
  courtCount: { type: Number, required: true },
  rounds: { type: Number, required: true },
});

export default mongoose.model<ScheduleModel>(
  "ScheduleDetails",
  scheduleDetailsSchema
);
