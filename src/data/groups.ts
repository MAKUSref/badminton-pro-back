import GroupSchema, { Group } from "../model/Group";

export const initGroups = async () => {
  await GroupSchema.insertMany<Group>([
    {
      category: "A",
      gender: "MAN",
    },
    {
      category: "B",
      gender: "MAN",
    },
    {
      category: "A",
      gender: "WOMAN",
    },
    {
      category: "B",
      gender: "WOMAN",
    },
  ]);
};
