"use client";
import React, { useEffect } from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroPart() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="hero-part-one"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="banner-item-one">
        <div className="first-banner-one">
          <div className="banner_text">
            <h3>Better Devices for Better Life</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.{" "}
            </p>
            <motion.div whileTap={{ scale: 0.8 }}>
              <button className="shop_btn">Shop Now</button>
            </motion.div>
          </div>
          <Carousel fade className="carousel-one">
            <Carousel.Item className="banner-carousel-one">
              <Image
                src="/banner_2.jpg"
                width={1173}
                height={480}
                alt="banner_img"
                className="bnr_img_one"
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item className="banner-carousel-one">
              <Image
                src="/banner_1.jpg"
                width={1173}
                height={480}
                alt="banner_img"
                className="bnr_img_one"
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item className="banner-carousel-one">
              <Image
                src="/banner_3.jpg"
                width={1173}
                height={480}
                alt="banner_img"
                className="bnr_img_one"
                priority={true}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HeroPart;
