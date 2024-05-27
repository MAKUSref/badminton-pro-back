import { Participation, participationSchema } from "./Participation";
import mongoose, { Types } from "mongoose";

export interface Match {
  startDataTime?: string;
  court?: number;
  participation1: Participation;
  participation2: Participation;
}

export interface MatchModel extends Match, Document {}

export const matchSchema = new mongoose.Schema<Match>({
  participation1: {
    type: participationSchema,
    required: true,
  },
  participation2: {
    type: participationSchema,
    required: true,
  },
  startDataTime: {
    type: String,
    required: true,
  },
});

export default mongoose.model<MatchModel>("Match", matchSchema);
