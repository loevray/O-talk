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
      <HeaderLeft>
        <span>로고 </span>
        <HeaderLeftText>탐색 </HeaderLeftText>
        <span>●</span>
      </HeaderLeft>
      <HeaderMid>
        <SearchForm>
          <SearchInput placeholder="검색"></SearchInput>
          <SearchBtn>ㅇ</SearchBtn>
        </SearchForm>
      </HeaderMid>
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
  align-items: center;
  width: 100%;
  height: 3.5rem;
  position: fixed;
  background-color: white;
  color: black;
  padding-right: 500px;
  box-shadow: 0px 0.5px 2px gray;
  z-index: 9999;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderMid = styled(HeaderLeft)``;
const HeaderRight = styled(HeaderLeft)``;
const HeaderLeftText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: purple;
  }
  margin: 0 2rem 0 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  background-color: lightgray;
  height: 2.5rem;
  width: 22rem;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 2px solid white;
  &:focus {
    border: 2px solid blue;
  }
  &:placeholder {
    color: darkgray;
  }
`;
const SearchBtn = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  outline: none;
  border: none;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
`;

export default withRouter(Header);
