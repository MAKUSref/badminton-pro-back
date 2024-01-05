import { Double } from "../../model/record/Double";
import { Single } from "../../model/record/Single";
import { generateDoubleSchedule } from "./generateDoubleSchedule";
import { generateSingleSchedule } from "./generateSingleSchedule";

export function generateSchedule(
  doubles: Double[],
  singles: Single[],
  mixes: Double[],
  startTime: string,
  endTime: string,
  startDate: string,
  courts: number
) {
  const singlesSchedule = generateSingleSchedule(
    singles,
    startTime,
    endTime,
    startDate,
    courts
  );
  const mixesSchedule = generateDoubleSchedule(
    mixes,
    startTime,
    endTime,
    startDate,
    courts
  );
  const doublesSchedule = generateDoubleSchedule(
    doubles,
    startTime,
    endTime,
    startDate,
    courts
  );
}
