import React from "react";
import './style.css'
import './responsive.css'
import Container from "../container/Container";
import FooterElements from "../homepart/footerelements";
import HomeTopBar from "../homepart/hometopbar";
import Login from "./Login";

function LoginPage() {
  return (
    <div>
      <Container>
        <HomeTopBar />
        <Login/>
      </Container>
      <FooterElements />
    </div>
  );
}

export default LoginPage;
