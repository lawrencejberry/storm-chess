import React from "react";
import {
  Flex,
  BorderBox,
  Button,
  ProgressBar,
  theme,
} from "@primer/components";

import { stormTurns } from "../logic/StormChess";

export default function Panel({
  status,
  orientation,
  setOrientation,
  autoFlipOn,
  setAutoFlipOn,
  resetBoard,
}) {
  const turnsUntilNextStorm =
    stormTurns[status.stormLevel] - Math.floor(status.turn);
  const turnsBetweenStorms =
    stormTurns[status.stormLevel] - (stormTurns[status.stormLevel - 1] || 0);
  return (
    <BorderBox marginX={16} padding={4}>
      <p>Player to move: {status.playerToMove === "b" ? "Black" : "White"}</p>
      <p>Turn: {Math.floor(status.turn)}</p>
      <p>Turns until next storm: {turnsUntilNextStorm}</p>
      <ProgressBar
        marginBottom={4}
        progress={(turnsUntilNextStorm * 100) / turnsBetweenStorms}
        bg={theme.colors.blue}
      />
      <Flex justifyContent="space-between" alignItems="center" marginY={4}>
        <span>Automatic flipping:</span>
        <input
          type="checkbox"
          id="autoFlipOn"
          name="autoFlipOn"
          checked={autoFlipOn}
          onClick={() => setAutoFlipOn(!autoFlipOn)}
        />
      </Flex>
      <Button
        display="block"
        marginY={2}
        width="100%"
        onClick={() =>
          setOrientation(orientation === "white" ? "black" : "white")
        }
      >
        Flip board
      </Button>
      <Button display="block" marginY={2} width="100%" onClick={resetBoard}>
        Reset board
      </Button>
    </BorderBox>
  );
}
