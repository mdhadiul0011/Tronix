'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { searchProductData } from "../searchdata";
import "./style.css"
import AOS from "aos";
import "aos/dist/aos.css";

function ListProduct() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="list_prdct" 
    data-aos="flip-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="2000">
      {
        searchProductData.map((item, i) => (
          <div className="list_menu" key={i}>
        <div className="img_text">
          <div className="img">
            <Image src={item.img} width={300} height={250} alt="serch_product" className="list_img" priority={true}/>
          </div>
          <div className="rate_text">
            <div className="rte_txt">
              <p>{item.reviewpoint}</p>
              <Image src={item.starImg} width={145} height={24} alt="rating"/>
              <span>Review {item.review} | Sold {item.sold}</span>
            </div>
            <h3>{item.topline}</h3>
            <p className="prdct_dtls">{item.blogProDetails}</p>
            <Link href='/pages/cart'>
            <button className="srch_cart_btn">Add to Cart</button>
            </Link>
          </div>
        </div>
        <div className="rtings_prdcts">
          <h5>{item.oldprice}</h5>
          <h4>{item.updateprice}</h4>
          <div className="wshlst">
            <Image src='/Love (1).png' width={24} height={24} alt="WishList"/>
            <p>Add to WishList</p>
          </div>
        </div>
      </div>
        ))
      }
    </div>
  );
}

export default ListProduct;
