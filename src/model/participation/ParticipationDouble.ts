import { Participation } from "../common";
import { Schema, Types } from "mongoose";

export interface ParticipationDouble extends Participation {
  pairId1: Types.ObjectId;
  pairId2: Types.ObjectId;
}

export interface ParticipationDoubleModel
  extends ParticipationDouble,
    Document {}

const participationDoubleSchema = new Schema<ParticipationDouble>({
  pairId1: { type: Schema.Types.ObjectId, required: true, ref: "Double" },
  pairId2: { type: Schema.Types.ObjectId, required: true, ref: "Double" },
});
