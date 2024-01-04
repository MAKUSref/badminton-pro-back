import { MatchSingle } from "../model/game/MatchSingle";

export function transpose(matrix: MatchSingle[][]) {
  const numRows = matrix.length;
  const numCols = Math.max(...matrix.map((row) => row.length));

  // Initialize transposed matrix with the correct dimensions
  const transposedMatrix: MatchSingle[][] = Array.from(
    { length: numCols },
    () => []
  );

  // Iterate through the original matrix and fill in the transposed matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
}
