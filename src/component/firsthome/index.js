import React from "react";
import { Container } from "react-bootstrap";
import TopRateProduct from "../homepart/toprateproduct";
import FooterElements from "../homepart/footerelements";
import HomeTopBar from "./HomeTopBar";
import HeroPart from "./Hero";
import Categories from "./Categories";
import NewArraivalsPart from "./NewArrivals";
import FeaturedProduct from "./FeaturedProduct";
import Collections from "./collections";
import Blog from "./blog";
import CollectionFeatured from "./collectionFeatured";
import CompaniesName from "./companiesName";
import FlashSale from "./flashShale";

function HomeOne() {
  return (
    <div>
      <Container>
        <HomeTopBar/>
        <HeroPart />
        <Categories />
        <NewArraivalsPart />
        <FeaturedProduct/>
        <Collections/>
        <FlashSale />
        <CollectionFeatured />
        <TopRateProduct />
        <Blog/>
        <CompaniesName />
      </Container>
      <FooterElements />
    </div>
  );
}

export default HomeOne;
