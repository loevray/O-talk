import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import img from "../../../image/1.jpg";
import LandingFormContainer from "../../containers/LandingFormContainer";

const LandingPage = (props) => {
  return (
    <>
      <Main>
        <ImgCurtain>
          <br />
        </ImgCurtain>
        <BackGroundImg src={img} />
        <MainCenter>
          <LandingFormContainer />
        </MainCenter>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;
const BackGroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -100;
  height: 100%;
  object-fit: cover;
`;
const ImgCurtain = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  height: 100%;
  opacity: 0.45;
  z-index: -90;
`;
const MainCenter = styled.aside`
  display: flex;
  justify-content: center;
  width: 650px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export default withRouter(LandingPage);
