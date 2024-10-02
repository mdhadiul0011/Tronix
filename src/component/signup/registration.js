"use client";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import { registration } from "@/validationform/Yup";
import { motion } from "framer-motion";

function Registration() {
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: registration,
    onSubmit: (values) => {
      formik.resetForm()
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="reg_part">
      <div className="reg_form">
        <div className="reg_head">
          <h3>Create Your Account</h3>
          <p>
            Hey there! Ready to join the party? We just need a few details from
            you to get started. Let's do this!
          </p>

          <div className="reg_google">
            <Image src="/google2.png" width={30} height={30} alt="Google_Img" />
            <p>Continue with Google</p>
          </div>
          <div className="reg_google">
            <Image
              src="/facebook2.png"
              width={30}
              height={30}
              alt="Google_Img"
            />
            <p>Continue with Facebook</p>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="name_inpt">
            <div className="name">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First name.."
                value={formik.values.fName}
                name="fName"
                onChange={formik.handleChange}
              />
              {errors.fName && touched.fName && (
                <p className="cmnt-errors">{errors.fName}</p>
              )}
            </div>
            <div className="name">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last name.."
                value={formik.values.lName}
                name="lName"
                onChange={formik.handleChange}
              />
              {errors.lName && touched.lName && (
                <p className="cmnt-errors">{errors.lName}</p>
              )}
            </div>
          </div>
          <div className="email">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email.."
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
            />
            {errors.email && touched.email && (
              <p className="cmnt-errors">{errors.email}</p>
            )}
          </div>

          <div className="email">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password.."
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
            />
            {errors.password && touched.password && (
              <p className="cmnt-errors">{errors.password}</p>
            )}
          </div>

          <div className="email">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password.."
              value={formik.values.confirmPassword}
              name="confirmPassword"
              onChange={formik.handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="cmnt-errors">{errors.confirmPassword}</p>
            )}
          </div>

          <motion.div
            whileTap={{ scale: 0.8 }}
          >
          <button className="signup_btn">Sing Up</button>
          </motion.div>

          <div className="accnt">
            <p>
              Already have an account? <a href="/pages/signin">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
