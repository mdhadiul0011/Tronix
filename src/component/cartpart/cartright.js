'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {motion} from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";

function Cartright() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='cart-right-part'>
      <div className='coupon' 
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000">
        <div className='coupon-icon'>
          <Image src='/icon2.png' width={50} height={50} alt='coupon-img'/>
        </div>
        <div className='coupon-code'>
        <Accordion>
          <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>Have a coupon code?</h3>
              </Accordion.Header>
          </Accordion.Item>
        </Accordion>
        </div>
      </div>
      <div className='summary' 
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000">
        <h3>summary</h3>

        <div className='total-price'>
          <p>Total:</p>
          <h3>$202.00</h3>
          {/* <h3>{item.price}</h3> */}
        </div>
        <div className='checkout-btn'>
          <a href='/pages/checkout'>
          <motion.div whileTap={{ scale: 0.8 }}>
            <button>Checkout</button>
          </motion.div>
          </a>
        </div>
        <div className='shopping'>
          <a href='/'>Continue Shopping</a>
        </div>
      </div>
    </div>
  )
}

export default Cartright
