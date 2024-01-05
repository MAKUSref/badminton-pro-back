import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { robinSingles, robinDoubles } from "../robin";
import { MatchSingle } from "../../model/game/MatchSingle";
import { Single } from "../../model/record/Single";
import { transposeSingles } from "../transpose";
import { groupSingles } from "../groupSingles";
import { groupSingleMatchesByCourt } from "../groupMatchesByCourt";
import { addDateTimeToMatches } from "../addDateTimeToMatches";
import { groupSingleMatchesByRound } from "../groupMatchesByRounds";

dayjs.extend(customParseFormat);

export function generateSingleSchedule(
  singles: Single[],
  startTime: string,
  endTime: string,
  startDate: string,
  courts: number
) {
  const groupedSingles = groupSingles(singles) as Single[][];

  let allSingleMatches: MatchSingle[] = [];

  for (let i = 0; i < groupedSingles.length; i++) {
    const matchedSingles = robinSingles(groupedSingles[i]);
    allSingleMatches = allSingleMatches.concat(matchedSingles);
  }

  const allMatchesByCourt = groupSingleMatchesByCourt(allSingleMatches, courts);

  const allMatchesByCourtByRound = groupSingleMatchesByRound(
    startTime,
    endTime,
    allMatchesByCourt
  );

  const schedule = addDateTimeToMatches(
    startDate,
    startTime,
    allMatchesByCourtByRound
  ) as MatchSingle[][][];

  //REVERSE COLUMN WITH ROW
  for (let i = 0; i < schedule.length; i++) {
    schedule[i] = transposeSingles(schedule[i]);
  }

  return schedule;
}
