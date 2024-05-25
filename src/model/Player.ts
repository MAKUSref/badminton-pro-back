import mongoose, { Schema, Types } from "mongoose";
import { Gender } from "./common";

export interface Player {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: Gender;
  email: string;
  singleId?: Types.ObjectId;
}

export interface PlayerModel extends Player, Document {}

const playerSchema = new Schema<Player>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  singleId: { type: Schema.Types.ObjectId, required: false, ref: "Single" },
});

export default mongoose.model<PlayerModel>("player", playerSchema);
