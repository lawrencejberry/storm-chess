import React, { useState } from "react";
import Chessboard from "chessboardjsx";

import getPossibleMoves from "../logic/getPossibleMoves";
import makeMove from "../logic/makeMove";
import getBoardPosition from "../logic/getBoardPosition";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

export default function Board() {
  const [position, setPosition] = useState("start");
  const [squareStyles, setSquareStyles] = useState({});
  const [history, setHistory] = useState([]);

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

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const isMoveValid = makeMove(sourceSquare, targetSquare);
    if (isMoveValid) {
      setPosition(getBoardPosition());
      setHistory(({ history, sourceSquare, targetSquare }) => [
        ...history,
        [sourceSquare, targetSquare],
      ]);
    }
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
