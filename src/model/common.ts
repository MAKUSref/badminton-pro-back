import { Match } from "./Match";

export type Gender = "MAN" | "WOMAN";

export type GroupType = "SINGLE";

export enum RegisterStatus {
  NO_GROUPS = "NO_GROUPS",
  USERS_REGISTER = "USERS_REGISTER",
  ADMIN_REGISTER = "ADMIN_REGISTER",
  CLOSED = "CLOSED",
}

export type Courts = Match[];
export type Rounds = Courts[];
export type Schedule = Rounds[]; // <-- Match[][][]
