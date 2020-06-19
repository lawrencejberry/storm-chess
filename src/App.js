import React from "react";
import styled from "styled-components";
import Game from "./components/Game";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  margin: 16px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header>
        <div>Storm Chess</div>
      </Header>
      <Main>
        <Game />
      </Main>
    </div>
  );
}

export default App;
