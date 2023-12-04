import UserSchema, { User } from "../model/User";

export const initUsers = () => {
  UserSchema.insertMany<User>([
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      phoneNumber: "555-123-4567",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Sarah",
      lastName: "Brown",
      phoneNumber: "888-999-0000",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "David",
      lastName: "Lee",
      phoneNumber: "777-333-2222",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Emily",
      lastName: "Wilson",
      phoneNumber: "444-666-8888",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Michael",
      lastName: "Clark",
      phoneNumber: "333-111-2222",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Linda",
      lastName: "Hall",
      phoneNumber: "222-555-7777",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "James",
      lastName: "Davis",
      phoneNumber: "999-777-5555",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Jennifer",
      lastName: "Adams",
      phoneNumber: "666-444-3333",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Daniel",
      lastName: "Moore",
      phoneNumber: "111-222-3333",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Karen",
      lastName: "White",
      phoneNumber: "555-777-8888",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Richard",
      lastName: "Harris",
      phoneNumber: "444-555-6666",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Susan",
      lastName: "Martin",
      phoneNumber: "888-444-2222",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Matthew",
      lastName: "Wilson",
      phoneNumber: "333-555-7777",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Laura",
      lastName: "Anderson",
      phoneNumber: "222-333-4444",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Brian",
      lastName: "Roberts",
      phoneNumber: "777-888-9999",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
    {
      firstName: "Catherine",
      lastName: "Turner",
      phoneNumber: "999-888-7777",
      email: "john.doe@email.com",
      gender: "WOMAN",
      role: [],
    },
    {
      firstName: "Kevin",
      lastName: "Parker",
      phoneNumber: "666-999-5555",
      email: "john.doe@email.com",
      gender: "MAN",
      role: [],
    },
  ]);
};
