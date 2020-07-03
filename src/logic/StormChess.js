import Chess from "chess.js";

import squares from "./squares.js";

const BaseChess = new Chess();

const stormTurns = [15, 25, 35, 45];

const StormChess = function () {
  // Attributes
  let stormLevel = 0; // Use this to index stormTurns to find the turns at which the next storm will arrive
  let gameOver = false;
  let liveSquares = squares;
  let zappedSquares = [];
  let turn = 0;

  // Methods
  function game_over() {
    // Returns true if the game has ended via checkmate, stalemate, draw, threefold repetition, or insufficient material. Otherwise, returns false. Must be customised because in_checkmate was customised.
    return (
      BaseChess.half_moves >= 100 ||
      in_checkmate() ||
      BaseChess.in_stalemate() ||
      BaseChess.insufficient_material()
    );
  }

  function in_checkmate() {
    // Returns true or false if the side to move has been checkmated. Must be customised because the King's legal moves will be different in Storm Chess.
    let numLegalMoves = 0;
    for (let i = 0; i < liveSquares.length; i++) {
      numLegalMoves += moves(liveSquares[i]).length;
    }
    return numLegalMoves === 0;
  }

  function move({ sourceSquare, targetSquare }) {
    // Attempts to make a move on the board, returning a move object if the move was legal and null if illegal.
    // Check the number of turns and wipe rows or columns as necessary, then increment stormLevel
    var movingSide = BaseChess.turn();
    var promotionLevel = Math.floor(stormLevel / 2);
    if (moves(sourceSquare).includes(targetSquare)) {
      BaseChess.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
      turn += 0.5;
      if (
        stormLevel > 1 &&
        (targetSquare.includes((promotionLevel + 1).toString()) ||
          targetSquare.includes((8 - promotionLevel).toString()))
      ) {
        const piece = BaseChess.get(targetSquare);
        if (piece && piece.type === "p") {
          BaseChess.remove(targetSquare);
          BaseChess.put({ type: "q", color: movingSide }, targetSquare);
        }
      }
      if (stormTurns.includes(turn)) {
        zap();
      }
      gameOver = game_over();
    }
  }

  function moves(square) {
    // Returns a list of legal moves from the selected square.
    const stormMoves = [];
    let playableSquares = liveSquares.slice(); // Must copy the liveSquares array by value rather than reference it
    if (Math.floor(turn) + 1 === stormTurns[stormLevel]) {
      let starter = 16 - stormLevel * 4;
      if (stormLevel >= 2) {
        starter = 20 - stormLevel * 4;
      }
      const nonPlayableSquares = playableSquares.splice(0, starter);

      // Then check if King is in the non playable region
      if (
        nonPlayableSquares.some((s) => {
          const piece = BaseChess.get(s);
          return (
            piece && piece.type === "k" && piece.color === BaseChess.turn()
          );
        })
      ) {
        const piece = BaseChess.get(square);
        if (piece && piece.type !== "k") {
          playableSquares = [];
        }
      }
    }

    const baseMoves = BaseChess.moves({ square: square, verbose: true });
    for (let baseMove of baseMoves) {
      if (playableSquares.includes(baseMove.to)) {
        stormMoves.push(baseMove.to);
      }
    }
    return stormMoves;
  }

  function zap() {
    let removeCount = 16 - stormLevel * 4;
    if (stormLevel >= 2) {
      removeCount = 20 - stormLevel * 4;
    }
    for (let i = 0; i < removeCount; i++) {
      BaseChess.remove(liveSquares[i]);
    }
    zappedSquares.concat(liveSquares.splice(0, removeCount));
    stormLevel += 1;
  }

  // Public API
  return {
    ...BaseChess,
    in_checkmate: in_checkmate,
    game_over: game_over,
    move: move,
    moves: moves,
    zap: zap,
    stormLevel: stormLevel,
    gameOver: gameOver,
    liveSquares: liveSquares,
    zappedSquares: zappedSquares,
    turn: turn,
  };
};

export default StormChess;
