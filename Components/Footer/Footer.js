import Image from "next/image";
import React, { useState } from "react";
import bg from "../../public/Images/footer/footerBackg.png";
import footerLogo from "styles/images/logo-1.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocation,
  faMessage,
  faBicycle,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Footer = () => {
  // else{
  //   setDisabled(false)
  // }

  return (
    <>
      <footer className="site-footer">
        <div
          className="site-footer-bg"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        ></div>
        {/* <Image src={bg}></Image> */}
        {/* <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="site-footer__top-logo">

                <Link href="/">
                  <a>
                    <Image src={footerLogo} />
                  </a>
                </Link>
              </div>
              <div className="site-footer__top-right">
                <p className="site-footer__top-right-text">
                  Food Supply Chain Management & Provide Services
                </p>
                <div className="site-footer__social">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faLocation}
                      // style={{ color: "yellow", marginRight:"5px" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faBicycle}
                      // style={{ color: "yellow", marginRight:"5px" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faLocation}
                      // style={{ color: "yellow", marginRight:"5px" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faBicycle}
                      // style={{ color: "yellow", marginRight:"5px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="site-footer__middle">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <Link href="/">
                    <a>
                      <Image src={footerLogo} />
                    </a>
                  </Link>
                  {/* <h4 className="footer-widget__title">ABOUT RONDHAN</h4> */}
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      {/* Lorem ipsum dolor sited ame etur adi pisicing elit tempor
                      labore. */}
                    </p>
                  </div>
                  {/* <form className="footer-widget__newsletter-form">
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        <FontAwesomeIcon
                          icon={faMessage}
                          // style={{ color: "yellow", marginRight:"5px" }}
                        />
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">LINKS</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <Link href="/about/whoWeAre">
                        <a>WHO WE ARE</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/products">PRODUCTS</Link>
                    </li>

                    <li>
                      <Link href="/career">CAREER</Link>
                    </li>
                    <li>
                      <Link href="/contact">CONTACT</Link>
                    </li>
                    {/* <li>
                      
                      <Link href="/contact">Contact</Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__services clearfix">
                  <h3 className="footer-widget__title">PROJECTS</h3>
                  <ul className="footer-widget__services-list list-unstyled clearfix">
                    <li>
                      <Link href="/projects/manufacturing">MANUFACTURING</Link>
                    </li>
                    <li>
                      <Link href="/projects/farming">FARMING</Link>
                    </li>
                    <li>
                      <Link href="/projects/cattle">CATTLE</Link>
                    </li>
                    <li>
                      <Link href="/projects/fisheries">FISHERIES</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact clearfix">
                  <h3 className="footer-widget__title">CONTACT</h3>
                  <div className="footer-widget__contact-text">
                    <p>
                      <FaMapMarkerAlt size={15} className="me-1" /> Corporate
                      Office : H # 54/A, R # 132, Gulshan Circle-1, Dhaka-1212
                    </p>
                    <p>
                      <FaIndustry size={15} className="me-1" /> Factory Address
                      : Danaidah, Boraigram, Natore 6613, Bangladesh
                    </p>
                    <p>
                      <AiOutlineMail size={15} className="me-1" />{" "}
                      info@rondhan.com
                    </p>
                    <p>
                      <FiPhoneCall size={15} className="me-1" /> +8801738022033
                    </p>
                  </div>
                  <Link href="/contact/be-A-Partner">
                    <a>
                      <p className="footerPartnerBtn">BE A PARTNER</p>
                    </a>
                  </Link>

                  {/* <div className="footer-widget__contact-info">
                    <div className="footer-widget__contact-icon">
                      <span className="icon-contact"></span>
                    </div>
                    <div className="footer-widget__contact-content">
                      <p className="footer-widget__contact-mail-phone">
                        <a
                          href="mailto:needhelp@wostin.com"
                          className="footer-widget__contact-mail"
                        >
                          info@rondhan.com
                        </a>
                        <a
                          href="tel:2463330088"
                          className="footer-widget__contact-phone"
                        >
                          +8801711991713
                        </a>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="site-footer-bottom-shape"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    <b>
                      © 2022 <a href="#">Rondhan.com</a>. All Rights Reserved.
                      Developed by{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.vmsl.com.bd"
                      >
                        VMSL
                      </a>
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
