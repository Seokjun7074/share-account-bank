import Body from "components/Layout/Body/Body";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function Layout() {
  return (
    <Body>
      <Header />
      <main>
        <Outlet />
      </main>
    </Body>
  );
}

export default Layout;
