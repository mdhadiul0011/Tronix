'use client'
import { leavecomment } from '@/validationform/Yup';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {motion} from "framer-motion"

function Leavecmnt() {
    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          comment: '',
        },
        validationSchema: leavecomment,
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
    <div className='leave-cmnt'
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
      <h3>Leave Comment</h3>

        <div className='leave-cmnt-form-part'>
            <form onSubmit={formik.handleSubmit}>
                <label>Comment</label>
                <textarea placeholder='Type Your Coment..' name='comment' value={formik.values.comment} onChange={formik.handleChange}/>
                {errors.comment && touched.comment && <p className='cmnt-errors'>{errors.comment}</p>}

                <div className='name-email'>
                    <div className='name'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Type Your Name..' value={formik.values.name} onChange={formik.handleChange}/>
                        {errors.name && touched.name && <p className='cmnt-errors'>{errors.name}</p>}
                    </div>
                    <div className='name'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Type Your Email..' value={formik.values.email} onChange={formik.handleChange}/>
                        {errors.email && touched.email && <p className='cmnt-errors'>{errors.email}</p>}
                    </div>
                </div>
                <div className='leave-cmnt-btn'>
                    <motion.button whileTap={{ scale: 0.9 }} type='submit'>Submit</motion.button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Leavecmnt
