import React, { useState, useEffect } from "react";
import Chessboard from "chessboardjsx";

import StormChess from "../logic/StormChess";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

const zappedSquareStyle = {
  background: "radial-gradient(circle, #000000 36%, transparent 40%)",
  borderRadius: "50%",
};

export default function Board() {
  const [game] = useState(new StormChess());
  const [position, setPosition] = useState("start");
  const [squareStyles, setSquareStyles] = useState({});

  useEffect(() => {
    // Perform zap animation and modify square styles to show that the rows or columns are out of bound
  }, [game.stormLevel]);

  const squareStyling = ({ possibleMoves }) => {
    return {
      ...Object.fromEntries(
        possibleMoves.map((possibleMove) => [possibleMove, possibleMoveStyle])
      ),
      ...Object.fromEntries(
        game.zappedSquares.map((zappedSquare) => [
          zappedSquare,
          zappedSquareStyle,
        ])
      ),
    };
  };

  const onMouseOverSquare = (square) => {
    setSquareStyles(squareStyling({ possibleMoves: game.moves(square) }));
  };

  const onMouseOutSquare = () => {
    setSquareStyles(squareStyling({ possibleMoves: [] }));
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      sourceSquare: sourceSquare,
      targetSquare: targetSquare,
    });
    if (move === null) return;
    setPosition(game.fen());
    setSquareStyles({ possibleMoves: [] });
  };

  return (
    <Chessboard
      position={position}
      squareStyles={squareStyles}
      onMouseOverSquare={onMouseOverSquare}
      onMouseOutSquare={onMouseOutSquare}
      onDrop={onDrop}
    />
  );
}
