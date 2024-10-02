'use client'
import React, { useEffect } from 'react'
import Aboutheadname from './aboutheadname'
import Images from 'next/image'
import { teamdata } from './aboutdata'
import AOS from "aos";
import "aos/dist/aos.css";

function Teampart() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='team-part'>
      <div
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Aboutheadname>Our Team</Aboutheadname>
      <div className='team-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
      </div>
      </div>

      <div className='team-all-item'
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        {
            teamdata.map((item, i)=>(
                <div className='team-item' key={i}>
                    <div className='imgs'>
                        <Images src={item.img} width={280} height={280} alt='team-img' className='team-img'/>
                    </div>
                    <h3>{item.head}</h3>
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Teampart
