import GroupSchema, { Group } from "../model/Group";

export const initGroups = () => {
  GroupSchema.insertMany<Group>([
    {
      category: "A",
      gender: "MAN",
    },
    {
      category: "A",
      gender: "WOMAN",
    },
  ]);
};
