import mongoose, { Schema, Types } from "mongoose";

export interface Tournament {
  date: string;
  bgImg: string;
  name: string;
}

export interface TournamentModel extends Tournament, Document {}

const tournamentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  bgImg: { type: String, required: false },
  name: { type: String, required: true },
});

export default mongoose.model<TournamentModel>("Tournament", tournamentSchema);
