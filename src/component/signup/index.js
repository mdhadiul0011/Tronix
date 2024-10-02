import React from "react";
import './style.css'
import './responsive.css'
import Container from "../container/Container";
import FooterElements from "../homepart/footerelements";
import HomeTopBar from "../homepart/hometopbar";
import Registration from "./registration";

function SignUp() {
  return (
    <div>
      <Container>
        <HomeTopBar/>
        <Registration/>
      </Container>
      <FooterElements />
    </div>
  );
}

export default SignUp;
