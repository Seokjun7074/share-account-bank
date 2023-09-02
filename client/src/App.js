import Body from "components/Layout/Body/Body";
import Header from "components/Layout/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Body>
      <Header />
      <main>
        <Outlet />
      </main>
    </Body>
  );
}

export default App;
