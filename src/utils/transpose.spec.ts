import { transposeSingles } from "./transpose";
import { matches } from "./data/matches";
import { MatchSingle } from "../model/game/MatchSingle";

const input1 = [
  [matches[0], matches[1], matches[2], matches[3], matches[4], matches[5]],
  [matches[6], matches[7], matches[8], matches[9], matches[10], matches[11]],
  [
    matches[12],
    matches[13],
    matches[14],
    matches[15],
    matches[16],
    matches[17],
  ],
  [
    matches[18],
    matches[19],
    matches[20],
    matches[21],
    matches[22],
    matches[23],
  ],
];

const output1 = [
  [matches[0], matches[6], matches[12], matches[18]],
  [matches[1], matches[7], matches[13], matches[19]],
  [matches[2], matches[8], matches[14], matches[20]],
  [matches[3], matches[9], matches[15], matches[21]],
  [matches[4], matches[10], matches[16], matches[22]],
  [matches[5], matches[11], matches[17], matches[23]],
];

test("tow demensional", () => {
  expect(transposeSingles(input1)).toStrictEqual(output1);
});

const input2 = [
  [matches[0], matches[1], matches[2], matches[3]],
  [matches[6]],
  [
    matches[12],
    matches[13],
    matches[14],
    matches[15],
    matches[16],
    matches[17],
  ],
  [matches[18], matches[19], matches[20], matches[21]],
];

const output2 = [
  [matches[0], matches[6], matches[12], matches[18]],
  [matches[1], , matches[13], matches[19]],
  [matches[2], , matches[14], matches[20]],
  [matches[3], , matches[15], matches[21]],
  [, , matches[16]],
  [, , matches[17]],
];

test("adds 1 + 2 to equal 3", () => {
  expect(transposeSingles(input2)).toStrictEqual(output2);
});

const input3 = [
  [matches[0], matches[1], matches[2], matches[3], matches[4], matches[5]],
  [matches[6], matches[7], matches[8], matches[9], matches[10], matches[11]],
  [matches[12], matches[13], matches[14], , matches[16]],
  [matches[18], matches[19], matches[20], , matches[22]],
];

const output3 = [
  [matches[0], matches[6], matches[12], matches[18]],
  [matches[1], matches[7], matches[13], matches[19]],
  [matches[2], matches[8], matches[14], matches[20]],
  [matches[3], matches[9], undefined, undefined],
  [matches[4], matches[10], matches[16], matches[22]],
  [matches[5], matches[11]],
];

test("adds 1 + 2 to equal 3", () => {
  expect(transposeSingles(input3 as MatchSingle[][])).toStrictEqual(output3);
});
