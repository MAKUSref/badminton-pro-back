import { Types } from "mongoose";
import { Single } from "../model/record/Single";
import { MatchSingle } from "../model/game/MatchSingle";
import { ParticipationSingle } from "../model/participation/ParticipationSingle";

const DUMMY: Single = {
  _id: new Types.ObjectId(),
  groupId: new Types.ObjectId(),
  playerId: new Types.ObjectId(),
};

// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm

export default function robinSingles(singles: Single[]) {
  const schedule: MatchSingle[] = []; // schedule = round array
  let length = singles.length;

  if (singles.length % 2 === 1) {
    singles.push(DUMMY); // so we can match algorithm for even numbers
    length++;
  }
  for (let j = 0; j < length - 1; j++) {
    for (let i = 0; i < length / 2; i += 1) {
      const o = length - 1 - i;
      if (singles[i] !== DUMMY && singles[o] !== DUMMY) {
        // flip orders to ensure everyone gets roughly n/2 home matches
        const isHome = i === 0 && j % 2 === 1;
        // insert pair as a match - [ away, home ]

        const participation1: ParticipationSingle = {
          singleId: singles[o]._id,
          set1: null,
          set2: null,
          set3: null,
        };

        const participation2: ParticipationSingle = {
          singleId: singles[i]._id,
          set1: null,
          set2: null,
          set3: null,
        };

        const match: MatchSingle = {
          _id: new Types.ObjectId(),
          participation1: isHome ? participation1 : participation2,
          participation2: isHome ? participation2 : participation1,
        };

        schedule.push(match);
      }
    }
    singles.splice(1, 0, singles.pop() as Single); // permutate for next round
  }
  return schedule;
}
