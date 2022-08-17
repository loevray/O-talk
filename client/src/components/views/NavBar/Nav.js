import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <Navwrap>네비게이션</Navwrap>;
};

const Navwrap = styled.nav`
  background-color: #efeff1;
  position: fixed;
  color: black;
  height: 100%;
  width: 5rem;
`;

export default Nav;
