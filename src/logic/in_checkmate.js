function in_checkmate() {
  let numLegalMoves = 0;
  for (let i = 0; i < liveSquares.length(); i++) {
    numLegalMoves += moves(liveSquares[i]).length();
  }
  return numLegalMoves === 0;
}
