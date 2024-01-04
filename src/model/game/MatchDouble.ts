import { Match } from "../common";
import { ParticipationDouble } from "../participation/ParticipationDouble";
import mongoose, { Types } from "mongoose";
import { participationSingleSchema } from "../participation/ParticipationSingle";

export interface MatchDouble extends Match {
  _id: Types.ObjectId;
  participationId1: ParticipationDouble;
  participationId2: ParticipationDouble;
}

export interface MatchDoubleModel extends MatchDouble, Document {}

const participationDoubleSchema = new mongoose.Schema<MatchDouble>({
  participationId1: {
    type: participationSingleSchema,
    required: true,
  },
  participationId2: {
    type: participationSingleSchema,
    required: true,
  },
});

export default mongoose.model<MatchDoubleModel>(
  "MatchDouble",
  participationDoubleSchema
);
