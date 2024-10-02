"use client";
import React, { useEffect } from "react";
import Images from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
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
  useEffect(() => {
    AOS.init();
  }, []);

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
  return (
    <>
      <div className="">
        <Slider {...settings}>
          <div className="flash-sec-part">
            <div className="sec-items" 
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
              <a href="/pages/product">
                <Images
                  src="/laptop.jpg"
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
                <h3>Supper Laptop</h3>
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
          <div className="flash-sec-part" 
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/smart_watch.jpg"
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
                <h3>Smart Watch</h3>
                <span className="ban-num">$27.99</span>
                <span className="current-num"> - $17.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
          <div className="flash-sec-part" 
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <div className="sec-items">
              <a href="/pages/product">
                <Images
                  src="/computer_2.jpg"
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
                <h3>Computer</h3>
                <span className="ban-num">$199.99</span>
                <span className="current-num"> - $189.99</span>
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
                  src="/smart_watch2.jpg"
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
                <h3>Digital Watch</h3>
                <span className="ban-num">$43.99</span>
                <span className="current-num"> - $33.99</span>
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
                  src="/computer.jpg"
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
                <h3>Latest Computer</h3>
                <span className="ban-num">$155.99</span>
                <span className="current-num"> - $145.99</span>
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
                  src="/laptop_3.jpg"
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
                <h3> New Brand Computer</h3>
                <span className="ban-num">$456.99</span>
                <span className="current-num"> - $446.99</span>
                <div className="available-sold">
                  <p>Available: 10</p>
                  <p>Sold: 5</p>
                </div>
                <ProgressBar variant="danger" now={80} className="prgrsbr"/>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Flashsalesecpart;
