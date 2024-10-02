"use client";
import React from "react";
import { useFormik } from "formik";
import { registration } from "@/validationform/Yup";
import { motion } from "framer-motion";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: registration,
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm()
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="reg_part">
      <div className="reg_form">
        <div className="reg_head">
          <h3>Login</h3>
          <p>
            Hey there! Ready to join the party? We just need a few details from
            you to get started. Let's do this!
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
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
            <motion.button whileTap={{ scale: 0.8 }} type="submit" className="signup_btn">Sing In</motion.button>
        </form>
        <div className="accnt">
          <p>
            If you have no any account, Please{" "}
            <a href="/pages/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
