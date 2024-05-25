import { Types } from "mongoose";
import { Match } from "../../model/Match";
import { Single } from "../../model/Single";

const MATCHES_SIZE = 20;
const SINGLES_SIZE = 6;

export const matches: Match[] = Array.from(Array(MATCHES_SIZE).keys()).map(
  () => ({
    _id: new Types.ObjectId(),
    participation1: {
      set1: null,
      set2: null,
      set3: null,
      singleId: new Types.ObjectId(),
    },
    participation2: {
      set1: null,
      set2: null,
      set3: null,
      singleId: new Types.ObjectId(),
    },
  })
);

export const singlesA: Single[] = Array.from(Array(SINGLES_SIZE).keys()).map(
  () => ({
    _id: new Types.ObjectId(),
    groupId: new Types.ObjectId(),
    playerId: new Types.ObjectId(),
  })
);

export const singlesB: Single[] = Array.from(Array(5).keys()).map(() => ({
  _id: new Types.ObjectId(),
  groupId: new Types.ObjectId(),
  playerId: new Types.ObjectId(),
}));
