export interface Participation {
  set1: number | null;
  set2: number | null;
  set3: number | null;
}

export interface Match {
  startDataTime?: string;
  court?: number;
}

export type Gender = "MAN" | "WOMAN";

export type GroupType = "SINGLE" | "MIX" | "DOUBLE";

export type Role = "ADMIN" | "JUDGE" | "PLAYER";

export enum RegisterStatus {
  NO_GROUPS = "NO_GROUPS",
  USERS_REGISTER = "USERS_REGISTER",
  ADMIN_REGISTER = "ADMIN_REGISTER",
  CLOSED = "CLOSED",
}
