"use client";
import React, { useEffect } from "react";
import "./style.css";
import { company } from "./categoryData";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Companyname() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="company-part">
      <div
        className="company-item"
        data-aos="fade-down"
        data-aos-anchor-placement="top-center"
      >
        {company.map((item, i) => (
          <motion.h3
            key={i}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            {item.name}
          </motion.h3>
        ))}
      </div>
    </div>
  );
}

export default Companyname;
