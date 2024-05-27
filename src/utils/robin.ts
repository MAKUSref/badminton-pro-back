import { Types } from "mongoose";
import { Single } from "../model/Single";
import { Match } from "../model/Match";
import { Participation } from "../model/Participation";

const DUMMY_SINGLE: Single = {
  _id: new Types.ObjectId(),
  groupId: new Types.ObjectId(),
  playerId: new Types.ObjectId(),
};

// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm

export function robinSingles(singles: Single[]) {
  const schedule: Match[] = []; // schedule = round array
  let length = singles.length;

  if (singles.length % 2 === 1) {
    singles.push(DUMMY_SINGLE); // so we can match algorithm for even numbers
    length++;
  }
  for (let j = 0; j < length - 1; j++) {
    for (let i = 0; i < length / 2; i += 1) {
      const o = length - 1 - i;
      if (singles[i] !== DUMMY_SINGLE && singles[o] !== DUMMY_SINGLE) {
        // flip orders to ensure everyone gets roughly n/2 home matches
        const isHome = i === 0 && j % 2 === 1;
        // insert pair as a match - [ away, home ]

        const participation1: Participation = {
          singleId: singles[o]._id,
          set1: null,
          set2: null,
          set3: null,
        };

        const participation2: Participation = {
          singleId: singles[i]._id,
          set1: null,
          set2: null,
          set3: null,
        };

        const match: Match = {
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
