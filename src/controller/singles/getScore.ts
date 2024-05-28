import MatchSchema from "../../model/Match";
import { Request, Response } from "express";
import { Participation } from "../../model/Participation";

export const getScore = async (req: Request<{ id: string }>, res: Response) => {
  try {
    console.log(req.params.id);

    const matches = await MatchSchema.find({
      $or: [
        { "participation1.singleId": req.params.id },
        { "participation2.singleId": req.params.id },
      ],
    });

    const allMatches = matches.length;
    const playedMatches = matches.filter((match) => match.participation1.set1);
    let score = 0;

    for (let i = 0; i < playedMatches.length; i++) {
      score += getScorePoints({
        participation: playedMatches[i].participation1,
      });
    }

    res.status(201).json({
      allMatches,
      playedMatches: playedMatches.length,
      score,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

interface SetScoreProps {
  participation: Participation;
}

export const getScorePoints = ({
  participation: { set1, set2, set3 },
}: SetScoreProps) => {
  if (set1 === 21 && set2 === 21) return 3;
  else if ((set1 === 21 && set3 === 21) || (set2 === 21 && set3 === 21))
    return 2;
  else if (
    (set3 && set1 === 21 && set3 < 21) ||
    (set3 && set2 === 21 && set3 < 21)
  )
    return 1;
  else return 0;
};
