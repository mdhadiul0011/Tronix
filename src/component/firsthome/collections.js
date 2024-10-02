'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Collections() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="collection">
      <div className="arrivals_head" 
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <h3>Our Collection</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="clctn_items">
        <div className="items_one" 
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <Image src="/computer_2.jpg" width={633} height={600} alt="Collection_img" className="cltn_img" priority={true}/>
            <div className="pc_game">
                <h3>PC Gaming Collection</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
            </div>
        </div>
        
        <div className="items_one" 
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <Image src="/computer.jpg" width={633} height={600} alt="Collection_img" className="cltn_img" priority={true}/>
            <div className="pc_game">
                <h3>PC Gaming Collection</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
