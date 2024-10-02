'use client'
import React, { useEffect } from 'react'
import './style.css'
import HeadName from '../headname/headname'
import Images from 'next/image'
import { CategoryData } from './categoryData'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Category() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className='category-part' 
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <HeadName>Category</HeadName>
      <div className='category-item'>
        {
            CategoryData.map((item, i)=>(
                <div className='items' key={i}>
                    <Images src={item.img} width={80} height={80} alt='icon_img'/>
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}
