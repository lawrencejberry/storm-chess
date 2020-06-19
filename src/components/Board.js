import React, { useState } from "react";
import Chessboard from "chessboardjsx";

import StormChess from "../logic/StormChess";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

export default function Board() {
  const [game] = useState(new StormChess());
  const [squareStyles, setSquareStyles] = useState({});

  const onMouseOverSquare = (square) => {
    const possibleMoves = game.moves();
    setSquareStyles(
      Object.fromEntries(
        possibleMoves.map((possibleMove) => [possibleMove, possibleMoveStyle])
      )
    );
  };

  const onMouseOutSquare = () => {
    setSquareStyles({});
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({ sourceSquare, targetSquare });
    if (move === null) return;
  };

  return (
    <Chessboard
      position={game.fen()}
      squareStyles={squareStyles}
      onMouseOverSquare={onMouseOverSquare}
      onMouseOutSquare={onMouseOutSquare}
      onDrop={onDrop}
    />
  );
}
