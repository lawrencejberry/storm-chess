import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import { Flex, BorderBox } from "@primer/components";

import StormChess from "../logic/StormChess";
import { Panel } from "../components";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

const zappedSquareStyle = {
  background: "#003366",
  opacity: "70%",
};

const game = new StormChess();

export default function Board() {
  const [status, setStatus] = useState(game.status());
  const [position, setPosition] = useState("start");
  const [squareStyles, setSquareStyles] = useState({});
  const [orientation, setOrientation] = useState("white");

  const squareStyling = ({ possibleMoves }) => {
    return {
      ...Object.fromEntries(
        possibleMoves.map((possibleMove) => [possibleMove, possibleMoveStyle])
      ),
      ...Object.fromEntries(
        status.zappedSquares.map((zappedSquare) => [
          zappedSquare,
          zappedSquareStyle,
        ])
      ),
    };
  };

  const onMouseOverSquare = (square) => {
    setSquareStyles(
      squareStyling({
        possibleMoves: game.moves(square),
      })
    );
  };

  const onMouseOutSquare = () => {
    setSquareStyles(
      squareStyling({
        possibleMoves: [],
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
    setStatus(game.status());
    setSquareStyles(
      squareStyling({
        possibleMoves: [],
      })
    );
  };

  return (
    <Flex flex={1} flexDirection="row" justifyContent="center">
      <BorderBox>
        <Chessboard
          position={position}
          squareStyles={squareStyles}
          onMouseOverSquare={onMouseOverSquare}
          onMouseOutSquare={onMouseOutSquare}
          onDrop={onDrop}
          orientation={orientation}
        />
      </BorderBox>
      <Panel
        status={status}
        orientation={orientation}
        setOrientation={setOrientation}
        resetBoard={() => {
          game.reset();
          setPosition(game.fen());
          setStatus(game.status());
          setSquareStyles(
            squareStyling({
              possibleMoves: [],
            })
          );
        }}
      />
    </Flex>
  );
}
