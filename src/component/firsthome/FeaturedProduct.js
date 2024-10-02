"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {motion} from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";

function FeaturedProduct() {
  const stratTime = Date.now() / 1000;
  const endTime = stratTime + 243248;

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 60,
    strokeWidth: 4,
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="fetrd_prdct">
      <div className="arrivals_head" 
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <h3>Featured Product</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="fetred_prdct_items">
        <div className="fetred_items_one"
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
          <h3>Wireless Microphone</h3>
          <div className="fetred_rates">
            <span>$99.99</span>
            <p>$19.99</p>
          </div>
          <div className="featured_img">
            <Image
              src="/headphone.jpg"
              width={512}
              height={400}
              alt="featured_img"
              className="frtred_img"
              priority={true}
            />
          </div>
          <div className="count_timer">
            <CountdownCircleTimer
              {...timerProps}
              colors="#D14081"
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("hrs", getTimeHours(daySeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors="#EF798A"
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
              })}
              className="count_time"
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors="#218380"
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0,
              })}
              className="count_time"
            >
              {({ elapsedTime, color }) => (
                <span style={{ color }}>
                  {renderTime("sec", getTimeSeconds(elapsedTime))}
                </span>
              )}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className="fetred_items">
          <div className="items_elements" 
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <Image
              src="/smart_tv.jpg"
              width={350}
              height={353}
              alt="fetred_images"
              className="fetred_imgs"
              priority={true}
            />
            <div className="img_text">
              <motion.div whileTap={{ scale: 0.8 }}>
                <button className="shop_btn">Limited Offer</button>
              </motion.div>
              <h3>Smart TV New Series</h3>
              <div className="fetred_rates">
                <span>$99.99</span>
                <p>$19.99</p>
              </div>
              <div className="count_times">
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#D14081"
                  duration={daySeconds}
                  initialRemainingTime={remainingTime % daySeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                      remainingTime - totalElapsedTime > hourSeconds,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "hrs",
                        getTimeHours(daySeconds - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#EF798A"
                  duration={hourSeconds}
                  initialRemainingTime={remainingTime % hourSeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                      remainingTime - totalElapsedTime > minuteSeconds,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "min",
                        getTimeMinutes(hourSeconds - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#218380"
                  duration={minuteSeconds}
                  initialRemainingTime={remainingTime % minuteSeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime("sec", getTimeSeconds(elapsedTime))}
                    </span>
                  )}
                </CountdownCircleTimer>
              </div>
            </div>
          </div>

          <div className="items_elements" 
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
            <Image
              src="/computer.jpg"
              width={350}
              height={353}
              alt="fetred_images"
              className="fetred_imgs"
              priority={true}
            />
            <div className="img_text">
              <motion.div whileTap={{ scale: 0.8 }}>
                <button className="shop_btn">Limited Offer</button>
              </motion.div>
              <h3>Desktop New Series</h3>
              <div className="fetred_rates">
                <span>$99.99</span>
                <p>$19.99</p>
              </div>
              <div className="count_times">
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#D14081"
                  duration={daySeconds}
                  initialRemainingTime={remainingTime % daySeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                      remainingTime - totalElapsedTime > hourSeconds,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "hrs",
                        getTimeHours(daySeconds - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#EF798A"
                  duration={hourSeconds}
                  initialRemainingTime={remainingTime % hourSeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                      remainingTime - totalElapsedTime > minuteSeconds,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "min",
                        getTimeMinutes(hourSeconds - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#218380"
                  duration={minuteSeconds}
                  initialRemainingTime={remainingTime % minuteSeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime("sec", getTimeSeconds(elapsedTime))}
                    </span>
                  )}
                </CountdownCircleTimer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
