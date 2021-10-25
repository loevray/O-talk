import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <ContentWrap>
        <Content>응애</Content>
        <Content>응애</Content>
        <Content>응애</Content>
        <Content>응애</Content>
        <Content>응애</Content>
        <Content>응애</Content>
      </ContentWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrap = styled.div``;
const Content = styled.span`
  font-size: 1rem;
  color: white;
`;

export default Footer;
