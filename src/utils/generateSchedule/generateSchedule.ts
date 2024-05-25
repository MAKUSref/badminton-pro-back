import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { robinSingles } from "../robin";
import { Match } from "../../model/Match";
import { Single } from "../../model/Single";
import { transposeSingles } from "../transpose";
import { groupSingles } from "../groupSingles";
import { groupMatchesByCourt } from "../groupMatchesByCourt";
import { addDateTimeToMatches } from "../addDateTimeToMatches";
import { groupMatchesByRound } from "../groupMatchesByRounds";

dayjs.extend(customParseFormat);

export function generateSchedule(
  singles: Single[],
  startTime: string,
  endTime: string,
  startDate: string,
  courts: number
) {
  const groupedSingles = groupSingles(singles) as Single[][];

  let allSingleMatches: Match[] = [];

  for (let i = 0; i < groupedSingles.length; i++) {
    const matchedSingles = robinSingles(groupedSingles[i]);
    allSingleMatches = allSingleMatches.concat(matchedSingles);
  }

  const allMatchesByCourt = groupMatchesByCourt(allSingleMatches, courts);

  const allMatchesByCourtByRound = groupMatchesByRound(
    startTime,
    endTime,
    allMatchesByCourt
  );

  const schedule = addDateTimeToMatches(
    startDate,
    startTime,
    allMatchesByCourtByRound
  ) as Match[][][];

  //REVERSE COLUMN WITH ROW
  for (let i = 0; i < schedule.length; i++) {
    schedule[i] = transposeSingles(schedule[i]);
  }

  return schedule;
}
