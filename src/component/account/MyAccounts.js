"use client";
import React from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { my_accounts } from "@/validationform/Yup";

function MyAccounts() {
  const initialState = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: my_accounts,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="my_accounts">
      <div className="account_left">
        <div className="account_text">
          <h3>My Profile</h3>
          <ul>
            <li>Account Details</li>
            <li>Orders</li>
            <li>Address</li>
            <li>Wallet</li>
            <li>My Favorite</li>
            <li>Loyality</li>
            <li>LogOut</li>
          </ul>
        </div>
      </div>
      <div className="account_right">
        <div className="account_detls">
          <h3>Account Details</h3>
          <div className="form_part">
            <form onSubmit={formik.handleSubmit}>
              <div className="form_flex">
                <div className="accnt_form">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="accnt_input"
                    name="fName"
                    value={formik.values.fName}
                    onChange={formik.handleChange}
                  />
                  {errors.fName && touched.fName && (
                    <p className="cmnt-errors">{errors.fName}</p>
                  )}
                </div>
                <div className="accnt_form">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="accnt_input"
                    name="lName"
                    value={formik.values.lName}
                    onChange={formik.handleChange}
                  />
                  {errors.lName && touched.lName && (
                    <p className="cmnt-errors">{errors.lName}</p>
                  )}
                </div>
                <div className="accnt_form">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="accnt_input"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {errors.lName && touched.lName && (
                    <p className="cmnt-errors">{errors.lName}</p>
                  )}
                </div>
                <div className="accnt_form">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="accnt_input"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {errors.phone && touched.phone && (
                    <p className="cmnt-errors">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="form_btn">
                <motion.button whileTap={{ scale: 0.9 }} type="submit">Submit</motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccounts;
