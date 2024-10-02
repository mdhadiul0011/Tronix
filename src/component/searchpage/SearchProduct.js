import Image from "next/image";
import React from "react";
import { searchData } from "./searchdata";
import Link from "next/link";

function SearchProduct() {
  return (
    <div className="blog-product">
      {searchData.map((item, i) => (
        <div className="blog-product-item" key={i}>
          <div className="blog-product-img">
            <Image src={item.img} width={320} height={280} alt="blog-product" />
          </div>
          <div className="blog-product-text">
            <h3>{item.topline}</h3>
            <p>{item.blogProDetails} </p>
            <div className="admin"></div>
            <div className="cart_rate">
              <div className="srch_priceing">
                <p>{item.updateprice}</p>
                <span>{item.oldprice}</span>
              </div>
              <Link href="/pages/cart" className="link">
                <button>Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchProduct;
