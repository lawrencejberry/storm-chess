import React from "react";
import styled from "styled-components";
import Board from "./components/Board";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  margin: 16px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
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
        <Board />
      </Main>
    </div>
  );
}

export default App;
