import mongoose, { Schema, Types } from "mongoose";

export interface Double {
  _id: Types.ObjectId;
  groupId: Types.ObjectId;
  playerId1: Types.ObjectId;
  playerId2: Types.ObjectId;
}

export interface DoubleModel extends Double, Document {}

const doubleSchema = new Schema<Double>({
  groupId: { type: Schema.Types.ObjectId, required: true, ref: "Group" },
  playerId1: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  playerId2: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export default mongoose.model<DoubleModel>("Double", doubleSchema);
