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
import { NavDropdown } from "react-bootstrap";

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
            <li>
              <NavDropdown title="ABOUT" id="navbarScrollingDropdown ">
                <p
                  className={
                    router.pathname == "/about/whoWeAre" ? "activeu" : ""
                  }
                >
                  <Link href="/about/whoWeAre"> WHO WE ARE</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/about/ourCulture" ? "activeu" : ""
                  }
                >
                  <Link href="/about/ourValues">OUR VALUES</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/about/ourTeam" ? "activeu" : ""
                  }
                >
                  <Link href="/about/ourTeam">OUR TEAM</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/about/membership" ? "activeu" : ""
                  }
                >
                  <Link href="/about/membership">MEMBERSHIP</Link>
                </p>
              </NavDropdown>
            </li>
            <li className={router.pathname == "/products" ? "activeu" : ""}>
              <Link href="/products">PRODUCTS</Link>
            </li>
            <li>
              <NavDropdown title="PROJECTS" id="navbarScrollingDropdown ">
                <p
                  className={
                    router.pathname == "/projects/manufacturing"
                      ? "activeu"
                      : ""
                  }
                >
                  <Link href="/projects/manufacturing"> MANUFACTURING</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/projects/farming" ? "activeu" : ""
                  }
                >
                  <Link href="/projects/farming">FARMING</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/projects/cattle" ? "activeu" : ""
                  }
                >
                  <Link href="/projects/cattle">CATTLE</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/projects/fisheries" ? "activeu" : ""
                  }
                >
                  <Link href="/projects/fisheries">FISHERIES</Link>
                </p>
                <p
                  className={
                    router.pathname == "/projects/handicraft" ? "activeu" : ""
                  }
                >
                  <Link href="/projects/handicraft">HANDICRAFT</Link>
                </p>
              </NavDropdown>
            </li>
            {/* <li
              className={router.pathname == "/sustainability" ? "activeu" : ""}
            >
              <Link href="/sustainability">SUSTAINABILITY</Link>
            </li> */}

            <li>
              <NavDropdown title="SUSTAINABILITY" id="navbarScrollingDropdown ">
                <p
                  className={
                    router.pathname == "/sustainability/strategy"
                      ? "activeu"
                      : ""
                  }
                >
                  <Link href="/sustainability/strategy"> STRATEGY</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/sustainability/economical"
                      ? "activeu"
                      : ""
                  }
                >
                  <Link href="/sustainability/economical">ECONOMICAL</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/sustainability/social" ? "activeu" : ""
                  }
                >
                  <Link href="/sustainability/social">SOCIAL</Link>
                </p>
                {/* <NavDropdown.Divider /> */}
                <p
                  className={
                    router.pathname == "/sustainability/environmental"
                      ? "activeu"
                      : ""
                  }
                >
                  <Link href="/sustainability/environmental">
                    ENVIRONMENTAL
                  </Link>
                </p>
                <p
                  className={
                    router.pathname == "/sustainability/csrActivities"
                      ? "activeu"
                      : ""
                  }
                >
                  <Link href="/sustainability/csrActivities">
                  CSR ACTIVITIES
                  </Link>
                </p>
              </NavDropdown>
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
