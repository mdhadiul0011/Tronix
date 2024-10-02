'use client'
import React, { useEffect } from "react";
import AllCategories from "./AllCategories";
import Searchright from "./Searchright";
import AOS from "aos";
import "aos/dist/aos.css";

function SearchItems() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="srch_boxes">
        <div className="latest_srch" 
      data-aos="flip-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
            <div className="ltst_srch">
                <h3>Your Latest Search</h3>
                <div className="srch_items">
                  <button>Smart Phone</button>
                  <button>Laptop</button>
                  <button>Head Phone</button>
                </div>
            </div>
        </div>
      <div className="row">
        <div className="col-lg-3">
          <AllCategories />
        </div>
        <div className="col-lg-9" 
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000">
          <Searchright/>
        </div>
      </div>
    </div>
  );
}

export default SearchItems;
