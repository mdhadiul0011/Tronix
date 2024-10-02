"use client";
import React, { useEffect, useState } from "react";
import { SearchData } from "./searchdata";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function AllCategories() {
  const [data, setData] = useState("100");
  const [count, setCount] = useState("701");
  const [check, setCheck] = useState(false);

  const handleIncreseSlide = (e) => {
    setCount(e.target.value);
  };

  const handleClickSlide = (e) => {
    setData(e.target.value);
  };

  const handleCheck = () => {
    setCheck(true);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="all_categrs"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
    >
      <h3>All Categories</h3>
      <div className="ctgrs_list">
        {SearchData.map((item, i) => (
          <div className="ctgrs_lists" key={i}>
            <p>{item.itemsName}</p>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
      <div className="fltr_price">
        <h3>Filter by Price</h3>
        <div className="price_slide">
          <div className="range-count">
            <input
              type="range"
              className="range"
              min="100"
              max="700"
              step={10}
              value={data}
              onChange={handleClickSlide}
            />
          </div>
          <div className="range-count">
            <input
              type="range"
              className="range"
              min="701"
              max="1200"
              step={10}
              value={count}
              onChange={handleIncreseSlide}
            />
          </div>
        </div>
        <p>
          Price: <span>${data}</span> <span>-</span> <span>${count}</span>
        </p>
      </div>

      <div className="location">
        <h3>Filter by Location</h3>
        <div className="area">
          <input type="checkbox" className="areacheckbox" id="check" />
          <label className="country" htmlFor="check">
            Jakarta
          </label>
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" id="checktwo" />
          <label className="country" htmlFor="checktwo">
            Yogyakarta
          </label>
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" id="checkthree" />
          <label className="country" htmlFor="checkthree">
            Bandung
          </label>
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" id="checkFour" />
          <label className="country" htmlFor="checkFour">
            Semarang
          </label>
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" id="checkFive" />
          <label className="country" htmlFor="checkFive">
            Surabaya
          </label>
        </div>
      </div>

      <div className="ratings">
        <h3>Filter by Location</h3>

        <div className="area">
          <input type="checkbox" className="areacheckbox" />
          <Image
            src="/stars (1).png"
            width={25}
            height={25}
            alt="star_rating"
          />
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" />
          <Image
            src="/stars (2).png"
            width={60}
            height={25}
            alt="star_rating"
          />
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" />
          <Image
            src="/stars (3).png"
            width={90}
            height={25}
            alt="star_rating"
          />
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" />
          <Image
            src="/stars (4).png"
            width={125}
            height={25}
            alt="star_rating"
          />
        </div>
        <div className="area">
          <input type="checkbox" className="areacheckbox" />
          <Image
            src="/stars (5).png"
            width={155}
            height={25}
            alt="star_rating"
          />
        </div>
      </div>

      <div className="brnd_name">
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h2 className="brnds">Filter by Brand</h2>
              </Accordion.Header>
              <Accordion.Body>Computer & Laptop</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className="brnds">Filter by Promotion</h2>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className="brnds">Filter by Payment</h2>
              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className="brnds">Filter by Shipment</h2>
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="fltr">
        <button>Filter</button>
        <p>Reset Filter</p>
      </div>
    </div>
  );
}

export default AllCategories;
