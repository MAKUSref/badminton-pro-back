import dotenv from "dotenv";
import mongoose from "mongoose";
import { initPlayers } from "../data/players";
import { initGroups } from "../data/groups";
import { initTournament } from "../data/tournament";

dotenv.config();
const mongoString = process.env.DATABASE_URL;

export module database {
  export const config = () => {
    mongoose.connect(mongoString ?? "");
    const database = mongoose.connection;

    database.on("error", (error: any) => {
      console.log(error);
    });

    database.once("connected", async () => {
      try {
        await mongoose.connection.db.dropDatabase();
        console.log("Dropped all collections");
      } catch (error) {
        console.log(error);
      }
      console.log("Database Connected");

      initTournament();
      console.log("Tournament initialized");
      // await initPlayers();
      // console.log("Users initialized");
      // await initGroups();
      // console.log("Groups initialized");
    });
  };
}
