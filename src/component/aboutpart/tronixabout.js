'use client'
import React, { useEffect } from 'react'
import Aboutheadname from './aboutheadname'
import AOS from "aos";
import "aos/dist/aos.css";

function Tronixabout() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='tronixabout-part'>
      <div className='breadcrumb'
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <ul>
          <li><a href='/'>Home</a></li>
          <li>About</li>
        </ul>
      </div>
      <div
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Aboutheadname >About Tronix</Aboutheadname>
      <div className='tronix-head'>
        <p>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers</p>
      </div>
      </div>
    </div>
  )
}

export default Tronixabout
