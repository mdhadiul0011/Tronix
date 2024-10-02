"use client";
import React, { useEffect } from "react";
import Images from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import { flashsale } from "./categoryData";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "red",
        width: "30px",
        height: "30px",
        borderRadius: "8px",
      }}
      onClick={onClick}
    />
  );
}

function Flashsalesecpart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="flash-sec-part"  data-aos="fade-up" data-aos-duration="3000">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/arraivals 1.png"
                  width={500}
                  height={350}
                  alt="flashSale"
                  className="flas_img"
                  priority={true}
                />
              </a>
              <div className="flash-tag">
                <p>45% OFF</p>
              </div>
              <div className="flash-sec-text">
                <h3>Wireless Headphone</h3>
                <span className="ban-num">$29.99</span>
                <span className="current-num"> - $19.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
          <div className="flash-sec-part"  data-aos="fade-down" data-aos-duration="3000">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/arraivals 7.png"
                  width={500}
                  height={350}
                  alt="flashSale"
                  className="flas_img"
                  priority={true}
                />
              </a>
              <div className="flash-tag">
                <p>45% OFF</p>
              </div>
              <div className="flash-sec-text">
                <h3>Wireless Headphone</h3>
                <span className="ban-num">$29.99</span>
                <span className="current-num"> - $19.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
          <div className="flash-sec-part"  data-aos="fade-right" data-aos-duration="3000">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/arraivals 6.png"
                  width={500}
                  height={350}
                  alt="flashSale"
                  className="flas_img"
                  priority={true}
                />
              </a>
              <div className="flash-tag">
                <p>45% OFF</p>
              </div>
              <div className="flash-sec-text">
                <h3>Wireless Headphone</h3>
                <span className="ban-num">$29.99</span>
                <span className="current-num"> - $19.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
          <div className="flash-sec-part"  data-aos="fade-left" data-aos-duration="3000">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/Offers_2.png"
                  width={500}
                  height={350}
                  alt="flashSale"
                  className="flas_img"
                  priority={true}
                />
              </a>
              <div className="flash-tag">
                <p>45% OFF</p>
              </div>
              <div className="flash-sec-text">
                <h3>Wireless Headphone</h3>
                <span className="ban-num">$29.99</span>
                <span className="current-num"> - $19.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
          <div className="flash-sec-part">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/arraivals 5.png"
                  width={500}
                  height={350}
                  alt="flashSale"
                  className="flas_img"
                  priority={true}
                />
              </a>
              <div className="flash-tag">
                <p>45% OFF</p>
              </div>
              <div className="flash-sec-text">
                <h3>Wireless Headphone</h3>
                <span className="ban-num">$29.99</span>
                <span className="current-num"> - $19.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
          <div className="flash-sec-part">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/arraivals 4.png"
                  width={500}
                  height={350}
                  alt="flashSale"
                  className="flas_img"
                  priority={true}
                />
              </a>
              <div className="flash-tag">
                <p>45% OFF</p>
              </div>
              <div className="flash-sec-text">
                <h3>Wireless Headphone</h3>
                <span className="ban-num">$29.99</span>
                <span className="current-num"> - $19.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} className="prgrsbr" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Flashsalesecpart;
