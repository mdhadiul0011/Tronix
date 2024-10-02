import React from "react";
import { Container } from "react-bootstrap";
import HomeTopBar from "../homepart/hometopbar";
import FooterElements from "../homepart/footerelements";
import SearchTop from "./SearchTop";
import SearchItems from "./SearchItems";
import './responsive.css'

function SearchPage() {
  return (
    <div>
      <Container>
        <HomeTopBar />
        <SearchTop />
        <SearchItems />
      </Container>
      <FooterElements />
    </div>
  );
}

export default SearchPage;
