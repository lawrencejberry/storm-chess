import React, { useState } from "react";
import Chessboard from "chessboardjsx";

function Game() {
  const [position, setPosition] = useState("start");

  return <Chessboard position={position} />;
}

export default Game;
