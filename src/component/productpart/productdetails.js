"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./style.css";
import Images from "next/image";
import Productdetailsright from "./productdetailsright";
import AOS from "aos";
import "aos/dist/aos.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
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

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
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

function SampleNextArrowsec(props) {
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
        marginRight: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrowsec(props) {
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
        marginLeft: "-25px",
      }}
      onClick={onClick}
    />
  );
}

function Productdetails() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settingssecond = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrowsec />,
    prevArrow: <SamplePrevArrowsec />,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="product-all-details">
      <div className="product-elements">
        <div
          className="prdct-items"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="prdct-img">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              {...settings}
            >
              <div>
                <Images
                  src="/offers_1.png"
                  width={750}
                  height={500}
                  alt="product-img"
                  className="pro_img"
                  priority={true}
                />
              </div>
              <div>
                <Images
                  src="/Offers_3.png"
                  width={750}
                  height={500}
                  alt="product-img"
                  className="pro_img"
                  priority={true}
                />
              </div>
              <div>
                <Images
                  src="/Offers_2.png"
                  width={750}
                  height={500}
                  alt="product-img"
                  className="pro_img"
                  priority={true}
                />
              </div>
              <div>
                <Images
                  src="/Offers_4.png"
                  width={750}
                  height={500}
                  alt="product-img"
                  className="pro_img"
                  priority={true}
                />
              </div>
              <div>
                <Images
                  src="/Offers_3.png"
                  width={750}
                  height={500}
                  alt="product-img"
                  className="pro_img"
                  priority={true}
                />
              </div>
            </Slider>
            <div className="sec-slide">
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                {...settingssecond}
              >
                <div>
                  <Images
                    src="/offers_1.png"
                    width={150}
                    height={150}
                    alt="product-img"
                  />
                </div>
                <div>
                  <Images
                    src="/Offers_3.png"
                    width={150}
                    height={150}
                    alt="product-img"
                  />
                </div>
                <div>
                  <Images
                    src="/Offers_2.png"
                    width={150}
                    height={150}
                    alt="product-img"
                  />
                </div>
                <div>
                  <Images
                    src="/Offers_4.png"
                    width={150}
                    height={150}
                    alt="product-img"
                  />
                </div>
                <div>
                  <Images
                    src="/Offers_3.png"
                    width={150}
                    height={150}
                    alt="product-img"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="prdct-details">
          <Productdetailsright />
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
