import { Types } from "mongoose";
import { Single } from "../model/record/Single";
import { MatchSingle } from "../model/game/MatchSingle";
import { ParticipationSingle } from "../model/participation/ParticipationSingle";
import { Double } from "../model/record/Double";
import { MatchDouble } from "../model/game/MatchDouble";
import { ParticipationDouble } from "../model/participation/ParticipationDouble";

const DUMMY_SINGLE: Single = {
  _id: new Types.ObjectId(),
  groupId: new Types.ObjectId(),
  playerId: new Types.ObjectId(),
};

const DUMMY_DOUBLE: Double = {
  _id: new Types.ObjectId(),
  groupId: new Types.ObjectId(),
  playerId1: new Types.ObjectId(),
  playerId2: new Types.ObjectId(),
};

// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm

export function robinSingles(singles: Single[]) {
  const schedule: MatchSingle[] = []; // schedule = round array
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

export function robinDoubles(doubles: Double[]) {
  const schedule: MatchDouble[] = []; // schedule = round array
  let length = doubles.length;

  if (doubles.length % 2 === 1) {
    doubles.push(DUMMY_DOUBLE); // so we can match algorithm for even numbers
    length++;
  }
  for (let j = 0; j < length - 1; j++) {
    for (let i = 0; i < length / 2; i += 1) {
      const o = length - 1 - i;
      if (doubles[i] !== DUMMY_DOUBLE && doubles[o] !== DUMMY_DOUBLE) {
        // flip orders to ensure everyone gets roughly n/2 home matches
        const isHome = i === 0 && j % 2 === 1;
        // insert pair as a match - [ away, home ]

        const participation1: ParticipationDouble = {
          pairId: doubles[o]._id,
          set1: null,
          set2: null,
          set3: null,
        };

        const participation2: ParticipationDouble = {
          set1: null,
          set2: null,
          set3: null,
          pairId: doubles[i]._id,
        };

        const match: MatchDouble = {
          _id: new Types.ObjectId(),
          participationId1: isHome ? participation1 : participation2,
          participationId2: isHome ? participation2 : participation1,
        };

        schedule.push(match);
      }
    }
    doubles.splice(1, 0, doubles.pop() as Double); // permutate for next round
  }
  return schedule;
}
