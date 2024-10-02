'use client'
import React, { useEffect, useState } from 'react'
import { reviewform } from '@/validationform/Yup';
import { useFormik } from 'formik';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

function Reivewformpart() {

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      comment: '',
    },
    validationSchema: reviewform,
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
    <div className='review-form-part'
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"> 
      <div className='form-text'>
        <h4>Add Your Review</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
      </div>
      <div className='form-part'>
        <form onSubmit={formik.handleSubmit}>

          <label>Name*</label>
          <input type='text' placeholder='Type Your Name..' onChange={formik.handleChange} name='name' value={formik.values.name}/>
          {errors.name && touched.name && <p className='cmnt-errors'>{errors.name}</p>}

          
          <label>Email*</label>
          <input type='email' placeholder='Type Your Email..' onChange={formik.handleChange} name='email' value={formik.values.email}/>
          {errors.email && touched.email && <p className='cmnt-errors'>{errors.email}</p>}

          
          <label>Comment*</label>
          <textarea type='text' placeholder='Type Your Comment..' onChange={formik.handleChange} name='comment' value={formik.values.comment}/>
          {errors.comment && touched.comment && <p className='cmnt-errors'>{errors.comment}</p>}

          <div className='form-rating'>
            <p>Rating</p>
            <Image src='/rating 4.png' width={100} height={20} alt='rating'/>
          </div>

          <div>
            <button type='submit' className='submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reivewformpart
