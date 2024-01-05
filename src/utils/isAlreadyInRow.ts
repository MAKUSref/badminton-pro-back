import { MatchDouble } from "../model/game/MatchDouble";
import { MatchSingle } from "../model/game/MatchSingle";
import { Single } from "../model/record/Single";

export function isSinglesAlreadyInRow(
  matchesInCourt: MatchSingle[],
  singleToAdd1Id: string,
  singleToAdd2Id: string
) {
  for (let k = 0; k < matchesInCourt.length; k++) {
    const single1Id = matchesInCourt[k].participation1.singleId.toHexString();
    const single2Id = matchesInCourt[k].participation2.singleId.toHexString();

    if (
      single1Id === singleToAdd1Id ||
      single1Id === singleToAdd2Id ||
      single2Id === singleToAdd1Id ||
      single2Id === singleToAdd2Id
    ) {
      return true;
    }
  }

  return false;
}

export function isDoublesAlreadyInRow(
  matchesInCourt: MatchDouble[],
  doubleToAdd1Id: string,
  doubleToAdd2Id: string
) {
  for (let k = 0; k < matchesInCourt.length; k++) {
    const doubleId1 = matchesInCourt[k].participationId1.pairId.toHexString();
    const doubleId2 = matchesInCourt[k].participationId2.pairId.toHexString();

    if (
      doubleId1 === doubleToAdd1Id ||
      doubleId1 === doubleToAdd2Id ||
      doubleId2 === doubleToAdd1Id ||
      doubleId2 === doubleToAdd2Id
    ) {
      return true;
    }
  }

  return false;
}
