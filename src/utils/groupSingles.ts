import { Double } from "../model/record/Double";
import { Single } from "../model/record/Single";

export function groupSingles(singles: Single[] | Double[]) {
  const groups = [
    ...new Set(singles.map((single) => single.groupId.toHexString())),
  ];

  const groupedSingles = groups.map((groupId) =>
    singles.filter((single) => single.groupId.toHexString() === groupId)
  );

  return groupedSingles;
}
