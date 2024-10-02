"use client";
import React, { useEffect } from "react";
import Blogleftpart from "../blogpart/blogleftpart";
import Blgdtlsrightpart from "./blgdtlsrightpart";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blogdtsprt() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="blog-part-start">
        <div className="breadcrumb"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
          <ul>
            <li className="brdcmb-list">
              <a href="/">Home</a>
            </li>
            <li className="brdcmb-list">BlogDetails</li>
          </ul>
        </div>

        <div className="blog-heading" 
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
          <h3>Blog Post</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.{" "}
          </p>
        </div>

        <div className="blg-all-part">
          <Blogleftpart />
          <Blgdtlsrightpart />
        </div>
      </div>
    </div>
  );
}
