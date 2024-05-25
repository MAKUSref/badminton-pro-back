import { Schema, Types } from "mongoose";

export interface Participation {
  singleId: Types.ObjectId;
  set1: number | null;
  set2: number | null;
  set3: number | null;
}

export interface ParticipationModel extends Participation, Document {}

export const participationSchema = new Schema<Participation>({
  singleId: { type: Schema.Types.ObjectId, required: true, ref: "Single" },
});
