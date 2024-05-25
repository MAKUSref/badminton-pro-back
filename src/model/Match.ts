import { Participation, participationSchema } from "./Participation";
import mongoose, { Types } from "mongoose";

export interface Match {
  _id: Types.ObjectId;
  startDataTime?: string;
  court?: number;
  participation1: Participation;
  participation2: Participation;
}

export interface MatchModel extends Match, Document {}

const matchSchema = new mongoose.Schema<Match>({
  participation1: {
    type: participationSchema,
    required: true,
  },
  participation2: {
    type: participationSchema,
    required: true,
  },
});

export default mongoose.model<MatchModel>("MatchSingle", matchSchema);
