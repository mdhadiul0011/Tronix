'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { blogData } from './blogdata'
import AOS from "aos";
import "aos/dist/aos.css";

function Blogproduct() {
    useEffect(() => {
      AOS.init();
    }, []);
    
  return (
    <div className='blog-product'
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
        {
            blogData.map((item, i)=> (
                <div className='blog-product-item' key={i}>
                    <div className='blog-product-img'>
                        <Image src={item.img} width={320} height={260} alt='blog-product'/>
                    </div>
                    <div className='blog-product-text'>
                        <h3>{item.topline}</h3>
                        <p>{item.blogProDetails} </p>
                        <div className='admin'>
                            <p><span>{item.user}</span>{item.timing}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Blogproduct
