'use client'
import React, { useEffect } from "react";
import Headviewall from "../headviewall/headviewall";
import HeadName from "../headname/headname";
import Image from "next/image";
import { collectionData } from "./categoriesData";
import {motion} from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";

function CollectionFeatured() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="collection_part">
      <div className="coll_item">
        <div className="item_1" 
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <h3>Best Collection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <a href="#">
            <button>shop now</button>
          </a>
        </div>
        <div className="item_head" 
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <Headviewall>
            <HeadName>Featured Products</HeadName>
            <p className="coll_text">View All</p>
          </Headviewall>
          <div className="item_2">
            {collectionData.map((item, i) => (
              <div className="item_details" key={i}>
                <div className="item_img_tag">
                  <Image
                    src={item.img}
                    width={376}
                    height={333}
                    alt="collection-img"
                    className="fetured_img"
                    priority={true}
                  />
                  <div className="sold_tag">
                    <p>{item.tagnew}</p>
                    <p className="coll_discount">{item.tagoff}</p>
                  </div>
                  {/* <span className='coll-discount2'>{item.tagout}</span> */}
                </div>
                <div className="flash-sec-text">
                  <h3>{item.headname}</h3>
                  <span className="ban-num">{item.banname}</span>
                  <span className="current-num">{item.curname}</span>
                </div>
                <div className="add_cart">
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <a href="/pages/cart">
                      <button>Add to cart</button>
                    </a>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionFeatured;
