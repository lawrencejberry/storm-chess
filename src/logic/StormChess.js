import Chess from "chess.js";

const BaseChess = new Chess();

const stormTurns = [15, 25, 35, 45];

const StormChess = function () {
  // Private properties shared amongst StormChess methods go here
  let stormLevel = 0; // Use this to index stormTurns to find the turns at which the next storm will arrive

  // Private methods used in the public methods below go here
  function getPlayableSquares() {
    return null;
  }

  return {
    ...BaseChess,
    in_checkmate: function () {
      // Returns true or false if the side to move has been checkmated. Must be customised because the King's legal moves will be different in Storm Chess.
      return null;
    },
    game_over: function () {
      // Returns true if the game has ended via checkmate, stalemate, draw, threefold repetition, or insufficient material. Otherwise, returns false. Must be customised because in_checkmate was customised.
      return null;
    },
    move: function ({ sourceSquare, targetSquare }) {
      // Attempts to make a move on the board, returning a move object if the move was legal and null if illegal.
      // Check the number of turns and wipe rows or columns as necessary, then increment stormLevel
      return null;
    },
    moves: function (square) {
      // Returns a list of legal moves from the selected square.
      return null;
    },
    stormLevel: stormLevel,
  };
};

export default StormChess;
