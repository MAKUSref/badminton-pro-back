import { Match } from "../common";
import {
  ParticipationSingle,
  participationSingleSchema,
} from "../participation/ParticipationSingle";
import mongoose, { Types } from "mongoose";

export interface MatchSingle extends Match {
  _id: Types.ObjectId;
  participation1: ParticipationSingle;
  participation2: ParticipationSingle;
}

export interface MatchSingleModel extends MatchSingle, Document {}

const matchSingleSchema = new mongoose.Schema<MatchSingle>({
  participation1: {
    type: participationSingleSchema,
    required: true,
  },
  participation2: {
    type: participationSingleSchema,
    required: true,
  },
});

export default mongoose.model<MatchSingleModel>(
  "MatchSingle",
  matchSingleSchema
);
