import TournamentSchema, { Tournament } from "../model/Tournament";

export const initTournament = () => {
  TournamentSchema.insertMany<Tournament>([
    {
      name: "Turniej Mikołajkowy",
      date: "17-11-2024",
      bgImg:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
};
