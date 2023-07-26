import React from "react";
import styled from "styled-components/macro";
import { AmmosIcon } from "./AboutFooter";
import { ButtonCTA } from "../App";

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: black;
  box-shadow: 0 0 50px 50px black;
`;

export const PageTabs = () => {
  const LinkWrapper = styled.a`
    text-decoration: none;
    color: inherit;
    margin-left: 10px;
    padding: 10px 15px;
    border-radius: 20px;
    transition: 250ms;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transition: 250ms;
      opacity: 1;
    }
  `;

  return (
    <>
      <LinkWrapper
        href={"https://docs.ammos.fi/ammos-docs/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs
      </LinkWrapper>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <Nav>
        <div style={{ display: "flex", height: "50px" }}>
          <AmmosIcon />
          <PageTabs />
        </div>
        <a href={"https://app.ammos.fi"}>
          <ButtonCTA
            style={{ width: "120px", fontWeight: "bold", fontSize: "14px" }}
          >
            Launch app
          </ButtonCTA>
        </a>
      </Nav>
    </>
  );
};

export default Navbar;
