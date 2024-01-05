import dayjs from "dayjs";
import { MatchSingle } from "../model/game/MatchSingle";
import { MatchDouble } from "../model/game/MatchDouble";
const TIME_FORMAT = "HH:mm";

export function groupSingleMatchesByRound(
  startTime: string,
  endTime: string,
  allMatchesByCourt: MatchSingle[][]
) {
  const hoursOfPlaying =
    dayjs(endTime, TIME_FORMAT).get("hours") -
    dayjs(startTime, TIME_FORMAT).get("hours");

  const maxMatchesInDay = hoursOfPlaying * 2; //30 min of match

  let turnsCount = Math.ceil(allMatchesByCourt.length / maxMatchesInDay);

  const matchesInDay = Math.floor(allMatchesByCourt.length / turnsCount);
  const matchesAddedInLastDay = allMatchesByCourt.length % turnsCount;

  console.log({
    allCourtMatches: allMatchesByCourt.length,
    turnsCount,
    matchesInDay,
    matchesAddedInLastDay,
  });

  let schedule: MatchSingle[][][] = [];
  let k = 0;

  for (let i = 0; i < turnsCount; i++) {
    schedule.push([]);
    for (let j = 0; j < matchesInDay; j++, k++) {
      schedule[i][j] = allMatchesByCourt[k];
    }
  }

  for (let i = 0; i < matchesAddedInLastDay; i++, k++) {
    schedule[i].push(allMatchesByCourt[k]);
  }

  return schedule;
}

export function groupDoubleMatchesByRound(
  startTime: string,
  endTime: string,
  allMatchesByCourt: MatchDouble[][]
) {
  const hoursOfPlaying =
    dayjs(endTime, TIME_FORMAT).get("hours") -
    dayjs(startTime, TIME_FORMAT).get("hours");

  const maxMatchesInDay = hoursOfPlaying * 2; //30 min of match

  let turnsCount = Math.ceil(allMatchesByCourt.length / maxMatchesInDay);

  const matchesInDay = Math.floor(allMatchesByCourt.length / turnsCount);
  const matchesAddedInLastDay = allMatchesByCourt.length % turnsCount;

  console.log({
    allCourtMatches: allMatchesByCourt.length,
    turnsCount,
    matchesInDay,
    matchesAddedInLastDay,
  });

  let schedule: MatchDouble[][][] = [];
  let k = 0;

  for (let i = 0; i < turnsCount; i++) {
    schedule.push([]);
    for (let j = 0; j < matchesInDay; j++, k++) {
      schedule[i][j] = allMatchesByCourt[k];
    }
  }

  for (let i = 0; i < matchesAddedInLastDay; i++, k++) {
    schedule[i].push(allMatchesByCourt[k]);
  }

  return schedule;
}
