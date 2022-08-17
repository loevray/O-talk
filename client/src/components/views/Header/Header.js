import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const Header = (props) => {
  const onLogOutClick = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        props.history.push("/");
      } else {
        alert("로그아웃 실패");
      }
    });
  };
  return (
    <HeaderWrap>
      <HeaderLeft>헤더 왼쪽</HeaderLeft>
      <HeaderMid>헤더 중앙</HeaderMid>
      <HeaderRight>
        헤더 오른쪽
        <button onClick={onLogOutClick}>로그아웃</button>
      </HeaderRight>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  position: fixed;
  background-color: red;
  color: white;
`;

const HeaderLeft = styled.div``;
const HeaderMid = styled(HeaderLeft)``;
const HeaderRight = styled(HeaderLeft)``;
export default withRouter(Header);
