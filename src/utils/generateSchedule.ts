import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import robinSingles from "./robin";
import { MatchSingle } from "../model/game/MatchSingle";
import { Single } from "../model/record/Single";
import { transpose } from "./transpose";
import { groupSingles } from "./groupSingles";
import { GroupMatchesByCourt } from "./groupMatchesByCourt";
import { addDateTimeToMatches } from "./addDateTimeToMatches";
import { groupMatchesByRound } from "./groupMatchesByRounds";

dayjs.extend(customParseFormat);

export function generateSchedule(
  singles: Single[],
  startTime: string,
  endTime: string,
  startDate: string,
  courts: number
) {
  const groupedSingles = groupSingles(singles);

  let allMatches: MatchSingle[] = [];

  for (let i = 0; i < groupedSingles.length; i++) {
    const matchedSingles = robinSingles(groupedSingles[i]);
    allMatches = allMatches.concat(matchedSingles);
  }

  const allMatchesByCourt = GroupMatchesByCourt(allMatches, courts);

  const allMatchesByCourtByRound = groupMatchesByRound(
    startTime,
    endTime,
    allMatchesByCourt
  );

  const schedule = addDateTimeToMatches(
    startDate,
    startTime,
    allMatchesByCourtByRound
  );

  //REVERSE COLUMN WITH ROW
  for (let i = 0; i < schedule.length; i++) {
    schedule[i] = transpose(schedule[i]);
  }

  return schedule;
}
