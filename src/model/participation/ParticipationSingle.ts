import { Participation } from "../common";
import { Schema, Types } from "mongoose";

export interface ParticipationSingle extends Participation {
  singleId: Types.ObjectId;
}

export interface ParticipationSingleModel
  extends ParticipationSingle,
    Document {}

export const participationSingleSchema = new Schema<ParticipationSingle>({
  singleId: { type: Schema.Types.ObjectId, required: true, ref: "Single" },
});
