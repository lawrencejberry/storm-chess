import React from "react";
import { BorderBox, Button, ProgressBar, theme } from "@primer/components";

import { stormTurns } from "../logic/StormChess";

export default function Panel({
  status,
  orientation,
  setOrientation,
  resetBoard,
}) {
  const turnsUntilNextStorm =
    stormTurns[status.stormLevel] - Math.floor(status.turn);
  const turnsBetweenStorms =
    stormTurns[status.stormLevel] - (stormTurns[status.stormLevel - 1] || 0);
  return (
    <BorderBox marginLeft={16} padding={4}>
      <p>Player to move: {status.playerToMove}</p>
      <p>Turn: {Math.floor(status.turn)}</p>
      <p>Turns until next storm: {turnsUntilNextStorm}</p>
      <ProgressBar
        marginBottom={4}
        progress={(turnsUntilNextStorm * 100) / turnsBetweenStorms}
        bg={theme.colors.blue}
      />
      <Button
        marginBottom={2}
        width="100%"
        type="button"
        onClick={() =>
          setOrientation(orientation === "white" ? "black" : "white")
        }
      >
        Flip board
      </Button>
      <Button marginBottom={2} width="100%" type="button" onClick={resetBoard}>
        Reset board
      </Button>
    </BorderBox>
  );
}
