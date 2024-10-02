'use client'
import React, { useEffect } from "react";
import './style.css'
import { useFormik } from "formik";
import { contactSubject } from "@/validationform/Yup";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {motion} from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          subject: '',
        },
        validationSchema: contactSubject,
        onSubmit: values => {
          console.log(values);
          formik.resetForm()
        },
      });

      const {errors, touched} = formik;

      
    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <div className="cntct">
      <div className="cntct_head" 
      data-aos="flip-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
        <h2>Contact Us</h2>
        <p>
          Learn more about our products and services to get a better experience
          in shopping at our website. Please complete this form to get the
          latest information from us. Our Customer Service is available on 24/7.
          The information you provide will be confidential and not shared with
          third parties.
        </p>
      </div>
      <div className="cntct_form">
        <div className="row">
          <div className="col-lg-8" 
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
            <form onSubmit={formik.handleSubmit}>
                <div className="form_part">
                    <div className="inpt_box">
                        <label>Name*</label>
                        <input type='text' placeholder='Type Your Name..' onChange={formik.handleChange} name='name' value={formik.values.name}/>
                        {errors.name && touched.name && <p className='cmnt-errors'>{errors.name}</p>}
                    </div>
                    <div className="inpt_box">
                        <label>Email*</label>
                        <input type='email' placeholder='Type Your Email..' onChange={formik.handleChange} name='email' value={formik.values.email}/>
                        {errors.email && touched.email && <p className='cmnt-errors'>{errors.email}</p>}
                    </div>
                    <div className="inpt_box">
                        <label>Subject*</label>
                        <textarea type='text' placeholder='Type Your Subject..' onChange={formik.handleChange} name='subject' value={formik.values.subject}/>
                        {errors.subject && touched.subject && <p className='cmnt-errors'>{errors.subject}</p>}
                    </div>
                    <div className="bnt_box">
                        <div className="check_box">
                            <input type="checkbox" className="chcked" id="checked"/>
                            <label htmlFor="checked">Accept Terms & Condition</label>
                        </div>
                        <motion.button whileTap={{ scale: 0.9 }}  type='submit'>Submit</motion.button>
                    </div>
                </div>
            </form>
          </div>
          <div className="col-lg-4"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
            <div className="cntct_right">
                <div className="cntct_text">
                    <h2>Contact Us</h2>
                    <div className="cntc_info">
                        <IoLocationOutline className="location"/>
                        <p>New York, United of States</p>
                    </div>
                    <div className="cntc_info">
                        <FiPhone className="location"/>
                        <p>+1234567890</p>
                    </div>
                    <div className="cntc_info">
                        <TfiEmail className="location"/>
                        <p>abc@gmail.com</p>
                    </div>
                </div>
                <div className="follow">
                    <h3>Follow Us</h3>
                    <div className="social_icons">
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebookSquare />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
