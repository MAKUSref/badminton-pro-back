import { Participation } from "../common";
import { Schema, Types } from "mongoose";

export interface ParticipationDouble extends Participation {
  pairId: Types.ObjectId;
}

export interface ParticipationDoubleModel
  extends ParticipationDouble,
    Document {}

const participationDoubleSchema = new Schema<ParticipationDouble>({
  pairId: { type: Schema.Types.ObjectId, required: true, ref: "Double" },
});
