"use client";
import React, { useEffect } from "react";
import Images from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Quality() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="quality-part">
      <div className="quality-img" data-aos="fade-up" data-aos-duration="3000">
        <a href="#">
          <Images
            src="/Frame 10.png"
            width={1370}
            height={429}
            alt="quality-img"
            className="quality_img"
            priority={true}
          />
        </a>
      </div>
    </div>
  );
}

export default Quality;
