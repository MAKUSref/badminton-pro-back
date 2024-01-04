import mongoose, { Schema, Types } from "mongoose";

export interface Single {
  _id: Types.ObjectId;
  playerId: Types.ObjectId;
  groupId: Types.ObjectId;
}

export interface SingleModel extends Single, Document {}

const singleSchema = new mongoose.Schema({
  groupId: { type: Schema.Types.ObjectId, required: true, ref: "Group" },
  playerId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export default mongoose.model<SingleModel>("Single", singleSchema);
