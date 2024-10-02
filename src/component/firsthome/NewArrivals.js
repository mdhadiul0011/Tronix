'use client'
import React, { useEffect } from 'react'
import './style.css'
import Images from 'next/image'
import { newArraivals } from './categoriesData'
import AOS from "aos";
import "aos/dist/aos.css";

function NewArraivalsPart() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='arrivals-part-one'>
        <div className='arrivals_head' 
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <h3>NewArrivals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        <div className='arraivals-items-one'>
            {
                newArraivals.map((item, i)=>(
                    <div className='items-list-one' key={i} 
                    data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <div className='items-img-one'>
                            <Images src={item.img} width={500} height={300} alt='newArraivals' className='arraivals_img' priority={true}/>
                            <div className='item-tag-one'>
                                <p>{item.tag}</p>
                            </div>
                        </div>
                        <div className='item-text-one'>
                            <h4>{item.devicename}</h4>
                            <h3>{item.rate}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewArraivalsPart