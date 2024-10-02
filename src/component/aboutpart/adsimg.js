'use client'
import React, { useEffect } from 'react'
import Images from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";

function Adsimg() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='adsimg-part'
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <div className='img'>
        <a href='#'>  
          <Images src='/Ads_2.png' width={1318} height={350} alt='ads_img' style={{objectFit: 'cover'}} className='about_img'  priority={true} />
        </a>
      </div>
    </div>
  )
}

export default Adsimg
