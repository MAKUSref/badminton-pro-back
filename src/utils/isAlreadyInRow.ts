import { Match } from "../model/Match";

export function isSinglesAlreadyInRow(
  matchesInCourt: Match[],
  singleToAdd1Id: string,
  singleToAdd2Id: string
) {
  for (let k = 0; k < matchesInCourt.length; k++) {
    const single1Id = matchesInCourt[k].participation1.singleId.toHexString();
    const single2Id = matchesInCourt[k].participation2.singleId.toHexString();

    if (
      single1Id === singleToAdd1Id ||
      single1Id === singleToAdd2Id ||
      single2Id === singleToAdd1Id ||
      single2Id === singleToAdd2Id
    ) {
      return true;
    }
  }

  return false;
}
