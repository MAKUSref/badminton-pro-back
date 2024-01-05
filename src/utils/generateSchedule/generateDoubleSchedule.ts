import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { robinDoubles } from "../robin";
import { MatchSingle } from "../../model/game/MatchSingle";
import { transposeDoubles, transposeSingles } from "../transpose";
import { groupSingles } from "../groupSingles";
import { groupDoubleMatchesByCourt } from "../groupMatchesByCourt";
import { addDateTimeToMatches } from "../addDateTimeToMatches";
import { groupDoubleMatchesByRound } from "../groupMatchesByRounds";
import { Double } from "../../model/record/Double";
import { MatchDouble } from "../../model/game/MatchDouble";

dayjs.extend(customParseFormat);

export function generateDoubleSchedule(
  doubles: Double[],
  startTime: string,
  endTime: string,
  startDate: string,
  courts: number
) {
  const groupedDoubles = groupSingles(doubles) as Double[][];

  let allSingleMatches: MatchSingle[] = [];
  let allDoubleMatches: MatchDouble[] = [];

  for (let i = 0; i < groupedDoubles.length; i++) {
    const matchedDoubles = robinDoubles(groupedDoubles[i]);
    allDoubleMatches = allDoubleMatches.concat(matchedDoubles);
  }

  const allMatchesByCourt = groupDoubleMatchesByCourt(allDoubleMatches, courts);

  const allMatchesByCourtByRound = groupDoubleMatchesByRound(
    startTime,
    endTime,
    allMatchesByCourt
  );

  const schedule = addDateTimeToMatches(
    startDate,
    startTime,
    allMatchesByCourtByRound
  ) as MatchDouble[][][];

  //REVERSE COLUMN WITH ROW
  for (let i = 0; i < schedule.length; i++) {
    schedule[i] = transposeDoubles(schedule[i]);
  }

  return schedule;
}
