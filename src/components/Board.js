import React, { useState } from "react";
import Chessboard from "chessboardjsx";

import StormChess from "../logic/StormChess";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

const zappedSquareStyle = {
  background: "#003366",
  opacity: "70%",
};

const squareStyling = ({ possibleMoves, zappedSquares }) => {
  return {
    ...Object.fromEntries(
      possibleMoves.map((possibleMove) => [possibleMove, possibleMoveStyle])
    ),
    ...Object.fromEntries(
      zappedSquares.map((zappedSquare) => [zappedSquare, zappedSquareStyle])
    ),
  };
};

export default function Board() {
  const [game] = useState(new StormChess());
  const [position, setPosition] = useState("start");
  const [squareStyles, setSquareStyles] = useState({});

  const onMouseOverSquare = (square) => {
    setSquareStyles(
      squareStyling({
        possibleMoves: game.moves(square),
        zappedSquares: game.zappedSquares,
      })
    );
  };

  const onMouseOutSquare = () => {
    setSquareStyles(
      squareStyling({
        possibleMoves: [],
        zappedSquares: game.zappedSquares,
      })
    );
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      sourceSquare: sourceSquare,
      targetSquare: targetSquare,
    });
    if (move === null) return;
    setPosition(game.fen());
    setSquareStyles(
      squareStyling({
        possibleMoves: [],
        zappedSquares: game.zappedSquares,
      })
    );
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
