'use client'
import React, { useEffect } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import HomeMenu from './HomeMenu';
import './style.css'
import './responsive.css'
import AOS from "aos";
import "aos/dist/aos.css";

function HomeTopBar() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="home-top">
        <div className="top-icon">
          <FaInstagram className="top-icons" />
          <FaFacebookSquare className="top-icons" />
          <FaTwitterSquare className="top-icons" />
          <IoLogoLinkedin className="top-icons" />
        </div>
        <div className="top-right">
          <div className="right-element">
            <FiPhone className="right-icon" />
            <p className="right-text">+12 345 6789 0</p>
          </div>
          <div className="right-element">
            <IoIosMail className="right-icon" />
            <p className="right-text">support@tronix.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-16 w-full b-red">
        <HomeMenu />
      </div>
    </div>
  );
}

export default HomeTopBar;
