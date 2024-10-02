"use client";
import React, { useEffect } from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hero-part">
      <div className="banner-item">
        <div
          className="first-banner"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <Carousel fade className="carousel">
            <Carousel.Item className="banner-carousel">
              <Image
                src="/laptop.jpg"
                width={1073}
                height={644}
                alt="sec_ban_img"
                className="bnr_img"
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item className="banner-carousel">
              <Image
                src="/laptop_2.jpg"
                width={1073}
                height={644}
                alt="sec_ban_img"
                className="bnr_img"
                priority={true}
              />
            </Carousel.Item>
            <Carousel.Item className="banner-carousel">
              <Image
                src="/camera3.jpg"
                width={1073}
                height={644}
                alt="sec_ban_img"
                className="bnr_img"
                priority={true}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          className="second-banner"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="pc-gaming">
              <Image
                src="/computer.jpg"
                width={1073}
                height={644}
                alt="computer_img"
                className="camera_img"
                priority={true}
              />
            <div className="pc-text">
              <p>Pc gaming collection</p>
            </div>
          </div>
          <div className="camera">
              <Image
                src="/camera.jpg"
                width={1073}
                height={644}
                alt="camera_img"
                className="camera_img"
                priority={true}
              />
            <div className="camera-text">
              <p>Camera collection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
