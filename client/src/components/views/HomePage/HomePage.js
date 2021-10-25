import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import Footer from "../Footer/Footer";

const HomePage = (props) => {
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
    <>
      <button onClick={onLogOutClick}>로그아웃</button>
      <Footer />
    </>
  );
};

export default withRouter(HomePage);
