import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import navLogo from "../styles/images/logo-1.png";
import { useRouter } from "next/router";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <Image onClick={goHome} src={navLogo}></Image>
        </div>
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li className={router.pathname == "/about" ? "activeu" : ""}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={router.pathname == "/products" ? "activeu" : ""}>
              <Link href="/products">PRODUCTS</Link>
            </li>
            <li className={router.pathname == "/projects" ? "activeu" : ""}>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li
              className={router.pathname == "/sustainability" ? "activeu" : ""}
            >
              <Link href="/sustainability">SUSTAINABILITY</Link>
            </li>
            <li className={router.pathname == "/career" ? "activeu" : ""}>
              <Link href="/career">CAREER</Link>
            </li>

            <li className={router.pathname == "/contact" ? "activeu" : ""}>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            
            <li>
              <h6>Have waste pickup?</h6>
              <h6>+ 1- (246) 333-0088</h6>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
