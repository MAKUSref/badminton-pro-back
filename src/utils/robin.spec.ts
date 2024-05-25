import { Types } from "mongoose";
import { Single } from "../model/Single";
import { singlesA, singlesB } from "./data/matches";
import { robinSingles } from "./robin";

test("Check number of matches", () => {
  const singles: Single[] = Array.from(Array(20).keys()).map(() => ({
    _id: new Types.ObjectId(),
    groupId: new Types.ObjectId(),
    playerId: new Types.ObjectId(),
  }));

  const count = (20 * 19) / 2;

  expect(robinSingles(singles).length).toBe(count);
});

test("Check number of matches", () => {
  const singles: Single[] = Array.from(Array(19).keys()).map(() => ({
    _id: new Types.ObjectId(),
    groupId: new Types.ObjectId(),
    playerId: new Types.ObjectId(),
  }));

  const count = (19 * 18) / 2;

  expect(robinSingles(singles).length).toBe(count);
});

test("Check number of matches", () => {
  const singles: Single[] = Array.from(Array(21).keys()).map(() => ({
    _id: new Types.ObjectId(),
    groupId: new Types.ObjectId(),
    playerId: new Types.ObjectId(),
  }));

  const count = (21 * 20) / 2;

  expect(robinSingles(singles).length).toBe(count);
});

test("Check number of matches", () => {
  const singles: Single[] = Array.from(Array(5).keys()).map(() => ({
    _id: new Types.ObjectId(),
    groupId: new Types.ObjectId(),
    playerId: new Types.ObjectId(),
  }));

  const count = (5 * 4) / 2;

  expect(robinSingles(singles).length).toBe(count);
});

const input1 = singlesA;
const output1 = [
  [singlesA[0]._id, singlesA[5]._id],
  [singlesA[1]._id, singlesA[4]._id],
  [singlesA[2]._id, singlesA[3]._id],
  [singlesA[0]._id, singlesA[4]._id],
  [singlesA[5]._id, singlesA[3]._id],
  [singlesA[1]._id, singlesA[2]._id],
  [singlesA[0]._id, singlesA[3]._id],
  [singlesA[4]._id, singlesA[2]._id],
  [singlesA[5]._id, singlesA[1]._id],
  [singlesA[0]._id, singlesA[2]._id],
  [singlesA[3]._id, singlesA[1]._id],
  [singlesA[4]._id, singlesA[5]._id],
  [singlesA[0]._id, singlesA[1]._id],
  [singlesA[2]._id, singlesA[5]._id],
  [singlesA[3]._id, singlesA[4]._id],
];

test("Even number of singles", () => {
  const pairs = robinSingles(input1).map((match) => [
    match.participation1.singleId,
    match.participation2.singleId,
  ]);

  for (let i = 0; i < pairs.length; i++) {
    expect(pairs[i]).toEqual(expect.arrayContaining(output1[i]));
  }
});

const input2 = singlesB;
const output2 = [
  [singlesB[1]._id, singlesB[4]._id],
  [singlesB[2]._id, singlesB[3]._id],
  [singlesB[0]._id, singlesB[4]._id],
  [singlesB[1]._id, singlesB[2]._id],
  [singlesB[0]._id, singlesB[3]._id],
  [singlesB[4]._id, singlesB[2]._id],
  [singlesB[0]._id, singlesB[2]._id],
  [singlesB[3]._id, singlesB[1]._id],
  [singlesB[0]._id, singlesB[1]._id],
  [singlesB[3]._id, singlesB[4]._id],
];

test("Odd number of singles", () => {
  const pairs = robinSingles(input2).map((match) => [
    match.participation1.singleId,
    match.participation2.singleId,
  ]);

  for (let i = 0; i < pairs.length; i++) {
    expect(pairs[i]).toEqual(expect.arrayContaining(output2[i]));
  }
});
