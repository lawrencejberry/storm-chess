import Chess from "chess.js";

const BaseChess = new Chess();

const StormChess = function () {
  // Variables shared amongst functions go here
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
      return null;
    },
    moves: function (square) {
      // Returns a list of legal moves from the selected square.
      return null;
    },
  };
};

export default StormChess;
