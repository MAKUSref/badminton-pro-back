import mongoose from "mongoose";
import { Gender } from "./common";

export interface Group {
  category: string;
  gender?: Gender;
}

export interface GroupModel extends Group, Document {}

const groupSchema = new mongoose.Schema<Group>({
  category: { type: String, required: true },
  gender: { type: String, required: false },
});

export default mongoose.model<GroupModel>("Group", groupSchema);
