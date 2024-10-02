"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { cartData } from "./cartdata";
import AOS from "aos";
import "aos/dist/aos.css";

function Cartleft() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };

  const handlePlas = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="cart-left-part">
      <div
        className="chec-box"
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        <input type="checkbox" id="select" className="select" />
        <label htmlFor="select">Select All</label>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        {cartData.map((item, i) => (
          <div className="cart-items" key={i}>
            <div className="select">
              <input type="checkbox" className="select" />
            </div>
            <div className="details">
              <div className="cart-imgs">
                <Image src={item.img} width={130} height={130} alt="cart-img" />
              </div>
              <div className="item-name-price">
                <h3>{item.proname}</h3>
                <p>{item.proprice}</p>
                <div className="count">
                  <div className="minus" onClick={handleMinus}>
                    -
                  </div>
                  <div className="numbers">{count}</div>
                  <div className="plass" onClick={handlePlas}>
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="cross">
              <RxCross2 className="cros-mark" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartleft;
