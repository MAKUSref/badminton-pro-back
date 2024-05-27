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
  set1: { type: Number, required: false },
  set2: { type: Number, required: false },
  set3: { type: Number, required: false },
});
