function move(startSquare, endSquare) {
  var movingSide = BaseChess.turn();
  var promotionLevel = Math.floor(stormLevel / 2);
  if (StormChess.moves(startSquare).includes(endSquare)) {
    BaseChess.move({ from: startSquare, to: endSquare });
    if (
      endSquare.includes((promotionLevel + 1).toString()) ||
      endSquare.includes((8 - promotionLevel).toString())
    ) {
      if (BaseChess.get(endSquare).type === "p") {
        BaseChess.remove(endSquare);
        BaseChess.put({ type: "q", color: movingSide }, endSquare);
      }
    }
    if (BaseChess.get(endSquare).color === "b") {
      if (stormTurns.includes(Math.floor(BaseChess.history().length / 2))) {
        StormChess.zap(); // Find the number of liveSquares to remove, remove these squares, then call .remove on each of those removes squares and increment the stormLevel
      }
    }
  }
  gameOver = game_over();
}
