"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import InputEmoji from "react-input-emoji";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import Outsideclick from "../outsideclick/OutSideClick";

function HomeMenuBar() {
  const [active, setActive] = useState(false);
  const [msg, setMsg] = useState(false)
  const [text, setText] = useState("");
  const clickOutSide = useRef(null)

  useEffect(()=> {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  },[])

  useEffect(() => {
    AOS.init();
  }, []);

  function handleOnEnter(text) {
    console.log("enter", text);
  }

    Outsideclick(clickOutSide, ()=> {
    setMsg(false)
  })

  return (
    <>
    <div className={active ? "active_menu" : "menubar"}>
      <div className="prjt-name">
        <Link href="/" className="link">
          <h2>Tronix</h2>
        </Link>
      </div>
      <div className="all-menu">
        <Navbar expand="lg" className="nav_menu">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu_toggole"
          />
          <Navbar.Collapse className="menu-list">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="list-type">
                Home
              </Nav.Link>
              <Nav.Link href="/pages/about" className="list-type">
                About
              </Nav.Link>
              <Nav.Link href="/pages/product" className="list-type">
                Product
              </Nav.Link>
              <NavDropdown
                title="Blog"
                id="basic-nav-dropdown"
                className="list-type"
              >
                <NavDropdown.Item href="/pages/blog">
                  Blog List
                </NavDropdown.Item>
                <NavDropdown.Item href="/pages/blogdetails">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/pages/contact" className="list-type">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="search-bar">
        <Link href="/pages/search" className="link">
          <div className="search-box">
            <input type="text" placeholder="Search your item.." />
            <div className="search-icon">
              <FaSearch className="srch_home_icon" />
            </div>
          </div>
        </Link>
      </div>
      <div className="shopping-element">
        <Link href='/pages/cart' className="link">
          <div className="shopping-icon">
            <MdOutlineShoppingBag  className="cart_icon"/>
            <div className="number">
              <p>99</p>
            </div>
          </div>
        </Link>
        <div className="shopping-icon"  onClick={()=>setMsg(!msg)}>
          <MdMailOutline />
        </div>
      </div>
    </div>
    {
        msg && <div className="msg_box" ref={clickOutSide}>
        <div className="cht_box">
          <div className="pro_dtls">
            <div className="img_box">
              <Image src="/about2.jpg" width={45} height={45} alt="Pro_Img" />
            </div>
            <div className="active"></div>
            <div className="name_status">
              <h3>Marina Kreta</h3>
              <p>Active Now</p>
            </div>
          </div>
          <div className="message_write">
            <div className="msg_left">
              <div className="left_text">
                <p> hello sir, how are you?</p>
              </div>
              <span>2 Minutes Ago</span>
            </div>
            <div className="msg_right">
              <div className="right_text">
                <p> I'm fine and you?</p>
              </div>
              <span>2 Minutes Ago</span>
            </div>
            <div className="msg_left">
              <div className="left_text">
                <p> also fine. What's up?</p>
              </div>
              <span>2 Minutes Ago</span>
            </div>
            <div className="msg_right">
              <div className="right_text">
                <p> Doing Work.</p>
              </div>
              <span>2 Minutes Ago</span>
            </div>
          </div>
          <div className="inpt_cht_send">
            <div className="cht_input_box">
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
            </div>
            <div className="send_msg">
              <IoSend />
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default HomeMenuBar;
