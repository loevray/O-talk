import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../NavBar/Nav";
import Main from "./Main";

const HomePage = (props) => {
  return (
    <>
      <HomePageWrap>
        <Header />
        <MainWrap>
          <Nav />
          <Main />
        </MainWrap>
      </HomePageWrap>
      <Footer />
    </>
  );
};

const HomePageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 2500px;
  background-color: purple;
  color: white;
`;

const MainWrap = styled.div`
  display: flex;
  padding-top: 3.5rem;
  height: 50rem;
  width: 100%;
`;

export default HomePage;
