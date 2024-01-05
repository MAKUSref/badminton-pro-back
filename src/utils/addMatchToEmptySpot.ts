import { MatchDouble } from "../model/game/MatchDouble";
import { MatchSingle } from "../model/game/MatchSingle";
import { isDoublesAlreadyInRow, isSinglesAlreadyInRow } from "./isAlreadyInRow";

export function addSingleMatchToEmptySpot(
  matchToAdd: MatchSingle,
  courts: number,
  allMatchesByCourt: MatchSingle[][]
) {
  const singleToAdd1 = matchToAdd.participation1.singleId;
  const singleToAdd2 = matchToAdd.participation2.singleId;

  const rowCount = allMatchesByCourt.length;

  for (let j = 0; j < rowCount; j++) {
    const busyCourtsCount = allMatchesByCourt[j].length;

    //If row has no empty spots move to next row
    if (busyCourtsCount === courts) {
      continue;
    }

    //If row contain match witch chosen players, move to next row
    const isSinglesBusy = isSinglesAlreadyInRow(
      allMatchesByCourt[j],
      singleToAdd1.toHexString(),
      singleToAdd2.toHexString()
    );

    if (isSinglesBusy) {
      continue;
    }

    //If row has empty spot paste match
    if (busyCourtsCount < courts) {
      matchToAdd.court = busyCourtsCount + 1;
      allMatchesByCourt[j].push(matchToAdd);
      return true;
    }
  }
  return false;
}

export function addDoubleMatchToEmptySpot(
  matchToAdd: MatchDouble,
  courts: number,
  allMatchesByCourt: MatchDouble[][]
) {
  const singleToAdd1 = matchToAdd.participationId1.pairId;
  const singleToAdd2 = matchToAdd.participationId2.pairId;

  const rowCount = allMatchesByCourt.length;

  for (let j = 0; j < rowCount; j++) {
    const busyCourtsCount = allMatchesByCourt[j].length;

    //If row has no empty spots move to next row
    if (busyCourtsCount === courts) {
      continue;
    }

    //If row contain match witch chosen players, move to next row
    const isDoublesBusy = isDoublesAlreadyInRow(
      allMatchesByCourt[j],
      singleToAdd1.toHexString(),
      singleToAdd2.toHexString()
    );

    if (isDoublesBusy) {
      continue;
    }

    //If row has empty spot paste match
    if (busyCourtsCount < courts) {
      matchToAdd.court = busyCourtsCount + 1;
      allMatchesByCourt[j].push(matchToAdd);
      return true;
    }
  }
  return false;
}
