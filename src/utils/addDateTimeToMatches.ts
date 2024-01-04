import dayjs from "dayjs";
import { MatchSingle } from "../model/game/MatchSingle";
import { Types } from "mongoose";

const TIME_FORMAT = "HH:mm";
export const DATE_FORMAT = "DD-MM-YYYY";

export function addDateTimeToMatches(
  startDate: string,
  startTime: string,
  schedule: MatchSingle[][][]
) {
  let date = dayjs(`${startDate}`, DATE_FORMAT);

  for (let i = 0; i < schedule.length; i++) {
    let time = dayjs(startTime, TIME_FORMAT);

    for (let j = 0; j < schedule[i].length; j++) {
      for (let k = 0; k < schedule[i][j].length; k++) {
        schedule[i][j][k].startDataTime = `${date.format(
          DATE_FORMAT
        )} ${time.format(TIME_FORMAT)}`;
        schedule[i][j][k]._id = new Types.ObjectId();
      }

      time = time.add(30, "minutes");
    }

    date = date.add(1, "week");
  }

  return schedule;
}
