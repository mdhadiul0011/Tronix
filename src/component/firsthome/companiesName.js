'use client'
import React, { useEffect } from "react";
import "./style.css";
import { companyData } from "./categoriesData";
import AOS from "aos";
import "aos/dist/aos.css";

function CompaniesName() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="company_part" 
    data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="company_item">
        {companyData.map((item, i) => (
          <div key={i}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompaniesName;
