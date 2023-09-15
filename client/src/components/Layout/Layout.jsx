import Body from "components/Layout/Body/Body";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import styled from "styled-components";

function Layout() {
  return (
    <Body>
      <Header />
      <PaddingWrapper>
        <Outlet />
      </PaddingWrapper>
    </Body>
  );
}

export default Layout;

const PaddingWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  padding: 0 1.5rem;
`;
