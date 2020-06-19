import React, { useState } from "react";
import Chessboard from "chessboardjsx";

import getPossibleMoves from "../logic/getPossibleMoves";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

function Game() {
  const [position, setPosition] = useState("start");
  const [squareStyles, setSquareStyles] = useState({});

  const onMouseOverSquare = (square) => {
    const possibleMoves = getPossibleMoves(square);
    setSquareStyles(
      Object.fromEntries(
        possibleMoves.map((possibleMove) => [possibleMove, possibleMoveStyle])
      )
    );
  };

  const onMouseOutSquare = () => {
    setSquareStyles({});
  };

  return (
    <Chessboard
      position={position}
      squareStyles={squareStyles}
      onMouseOverSquare={onMouseOverSquare}
      onMouseOutSquare={onMouseOutSquare}
    />
  );
}

export default Game;
