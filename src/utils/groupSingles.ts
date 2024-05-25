import { Single } from "../model/Single";

export function groupSingles(singles: Single[]) {
  const groups = [
    ...new Set(singles.map((single) => single.groupId.toHexString())),
  ];

  const groupedSingles = groups.map((groupId) =>
    singles.filter((single) => single.groupId.toHexString() === groupId)
  );

  return groupedSingles;
}
