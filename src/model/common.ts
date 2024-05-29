import { Match } from "./Match";

export type Gender = "MAN" | "WOMAN";

export type GroupType = "SINGLE";

export enum RegisterStatus {
  ADDING_PLAYERS_GROUPS = "ADDING_PLAYER_GROUPS",
  REGISTER_PLAYERS = "REGISTER_PLAYERS",
  CLOSED = "CLOSED",
}

export type Courts = Match[];
export type Rounds = Courts[];
export type Schedule = Rounds[]; // <-- Match[][][]
