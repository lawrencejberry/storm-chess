import React, { useState, useEffect } from "react";
import Chessboard from "chessboardjsx";
import { Flex, BorderBox } from "@primer/components";

import StormChess from "../logic/StormChess";
import { Panel } from "../components";
import lightningImage from "../images/lightning.png";

const possibleMoveStyle = {
  background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
  borderRadius: "50%",
};

const zappedSquareStyle = {
  background: "#003366",
  opacity: "70%",
};

const lightningSquareStyle = {
  background: "#003366",
  opacity: "70%",
  backgroundImage: `url(${lightningImage})`,
  backgroundSize: "contain",
};

const game = new StormChess();

export default function Board() {
  const [status, setStatus] = useState(game.status());
  const [position, setPosition] = useState("start");
  const [orientation, setOrientation] = useState("white");
  const [autoFlipOn, setAutoFlipOn] = useState(false);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [lightningSquares, setLightningSquares] = useState([]);

  const squareStyles = {
    ...Object.fromEntries(
      possibleMoves.map((possibleMove) => [possibleMove, possibleMoveStyle])
    ),
    ...Object.fromEntries(
      status.zappedSquares.map((zappedSquare) => [
        zappedSquare,
        zappedSquareStyle,
      ])
    ),
    ...Object.fromEntries(
      lightningSquares.map((lightningSquare) => [
        lightningSquare,
        lightningSquareStyle,
      ])
    ),
  };

  useEffect(() => {
    setLightningSquares(status.zappedSquares);
    setTimeout(() => setLightningSquares([]), 1500);
  }, [status.stormLevel, status.zappedSquares]);

  const onMouseOverSquare = (square) => {
    setPossibleMoves(game.moves(square));
  };

  const onMouseOutSquare = () => {
    setPossibleMoves([]);
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = game.move({
      sourceSquare: sourceSquare,
      targetSquare: targetSquare,
    });
    if (move === null) return;
    setPosition(game.fen());
    setStatus(game.status());
    setPossibleMoves([]);
    if (autoFlipOn) {
      setOrientation(game.status().playerToMove === "b" ? "black" : "white");
    }
  };

  const resetBoard = () => {
    game.reset();
    setPosition(game.fen());
    setStatus(game.status());
    setPossibleMoves([]);
    setLightningSquares([]);
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
        autoFlipOn={autoFlipOn}
        setAutoFlipOn={setAutoFlipOn}
        resetBoard={resetBoard}
      />
    </Flex>
  );
}
