"use client";
import React, { useEffect } from "react";
import Images from "next/image";
import { blogcomment } from "./blogdatas";
import AOS from "aos";
import "aos/dist/aos.css";

function Blgdtlscomment() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="blg-dtls-cmnt"
      data-aos="flip-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
    >
      <h3>Comment</h3>
      <div className="blg-dtls-list">
        {blogcomment.map((item, i) => (
          <div className="blg-dtls-comment" key={i}>
            <div className="blg-dtls-cmnt-element">
              <div className="blg-dtls-cmnt-img-rate">
                <div className="img">
                  <Images
                    src={item.img}
                    width={56}
                    height={56}
                    alt="comment-img"
                  />
                </div>
                <div className="comment-text">
                  <h4>{item.cmntname}</h4>
                  <div className="comment-rating">
                    <p className="comment-rate-timing">{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="cmnt">{item.cmnt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blgdtlscomment;
