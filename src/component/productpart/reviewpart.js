'use client'
import React, { useEffect } from 'react'
import Images from 'next/image'
import { commentdata } from './productdata'
import AOS from "aos";
import "aos/dist/aos.css";

function Reviewpart() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='review-part'>
        <div className='review-tag'
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <p>(200)Review</p>
            <p>Description</p>
            <p>Discusion</p>
            <p>Gift Cards</p>
        </div>
        <div className='comment-list' 
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            {
                commentdata.map((item, i)=>(
                    <div className='tag-comment' key={i}>
                        <div className='cmnt-element'>
                            <div className='cmnt-img-rate'>
                                <div className='img'>
                                    <Images src={item.img} width={56} height={56} alt='comment-img'/>
                                </div>
                                <div className='review-text'>
                                    <h4>{item.cmntname}</h4>
                                    <div className='rating'>
                                        <p>{item.reviewrate}</p>
                                        <Images src={item.cmntrateimg} width={100} height={20} alt='review'/>
                                        <p className='rate-timing'>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <p className='cmnt'>
                                {item.cmnt} 
                            </p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Reviewpart
