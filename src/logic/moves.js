function moves(Square) {
  const stormMoves = [];
  // Turns = length of BaseChess history array
  let playableSquares = liveSquares;
  if (
    Math.floor(BaseChess.history().length / 2) + 1 ===
    stormTurns[stormLevel]
  ) {
    let starter = 16 - stormLevel * 4;
    if (stormLevel >= 2) {
      starter = 20 - stormLevel * 4;
    }
    const nonPlayableSquares = playableSquares.splice(0, starter);

    // Then check if King is in the non playable region
    if (
      nonPlayableSquares.some((s) => {
        const piece = BaseChess.get(s);
        return piece.type === "k" && piece.color === BaseChess.turn();
      })
    ) {
      if (BaseChess.get(square).type !== "k") {
        playableSquares = [];
      }
    }
  }

  //This will work if we make sure that the 'liveSquares' array is ordered by how soon they get removed-
  //first 16 squares to get removed are in first 16 positions, etc.

  for (i = 0; i < BaseChess.moves(Square).length; i++) {
    if (liveSquares.includes(Basechess.moves(square)[i])) {
      stormMoves.push(Basechess.moves(square)[i]);
    }
  }
  return stormMoves;
}
