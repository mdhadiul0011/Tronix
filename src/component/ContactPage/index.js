import React from "react";
import { Container } from "react-bootstrap";
import HomeTopBar from "../homepart/hometopbar";
import FooterElements from "../homepart/footerelements";
import Contact from "./contact";

function ContactPage() {
  return (
    <div>
      <Container>
        <HomeTopBar />
        <Contact/>
      </Container>
      <FooterElements />
    </div>
  );
}

export default ContactPage;
