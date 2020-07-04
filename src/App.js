import React from "react";
import { BaseStyles, Heading } from "@primer/components";

import { Board } from "./components";

function App() {
  return (
    <BaseStyles>
      <Heading fontSize={24} margin={4} textAlign="center">
        Storm Chess
      </Heading>
      <Board />
    </BaseStyles>
  );
}

export default App;
