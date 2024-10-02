"use client";
import React, { useEffect } from "react";
import Aboutheadname from "./aboutheadname";
import Images from "next/image";
import { choosedata } from "./aboutdata";
import AOS from "aos";
import "aos/dist/aos.css";

function Choosepart() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="choose-part">
      <div
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Aboutheadname>Why Choosing Us</Aboutheadname>
      </div>
      <div
        className="choose-all-item"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {choosedata.map((item, i) => (
          <div className="choose-item" key={i}>
            <Images
              src={item.img}
              width={64}
              height={64}
              alt="choosepart-img"
            />
            <h3>{item.head}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choosepart;
