import { MatchSingle } from "../model/game/MatchSingle";
import { Types } from "mongoose";
import { isSinglesAlreadyInRow } from "./isSingesAlreadyInRow";
import { addMatchToEmptySpot } from "./addMatchToEmptySpot";

export function GroupMatchesByCourt(allMatches: MatchSingle[], courts: number) {
  let allMatchesByCourt: MatchSingle[][] = [];

  //ADD MATCHES WITH COURTS
  allMatches.forEach((matchToAdd) => {
    if (!allMatchesByCourt.length) {
      allMatchesByCourt.push([]);
      matchToAdd.court = 1;
      allMatchesByCourt[0].push(matchToAdd);
      return;
    }

    const matchAdded = addMatchToEmptySpot(
      matchToAdd,
      courts,
      allMatchesByCourt
    );

    //Add Match to next row
    if (!matchAdded) {
      allMatchesByCourt.push([]);
      const newRowCount = allMatchesByCourt.length;

      matchToAdd.court = 1;
      allMatchesByCourt[newRowCount - 1].push(matchToAdd);
    }
  });

  return allMatchesByCourt;
}
