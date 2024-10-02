'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import { blogData } from "./categoriesData";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="blg_part">
      <div className="arrivals_head" 
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"> 
        <h3>Blog</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="blg_items" 
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        {blogData.map((item, i) => (
          <div className="items_blg" key={i}>
            <div className="blog_imgs">
              <Image
                src={item.img}
                width={300}
                height={320}
                alt="blog_img"
                className="blg_img"
                priority={true}
              />
            </div>
            <h3>{item.blghead}</h3>
            <p>
              by <span>{item.admin}</span>, 12 Jan 2021
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
