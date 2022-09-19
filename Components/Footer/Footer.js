import Image from "next/image";
import React from "react";
import bg from "../../public/Images/footer/footer.jpg";
import footerLogo from "styles/images/logo-1.png";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocation,
  faMessage,
  faBicycle,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  console.log(bg);
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
                  <h4 className="footer-widget__title">ABOUT RONDHAN</h4>
                  <div className="footer-widget__about-text-box">
                    <p className="footer-widget__about-text">
                      Lorem ipsum dolor sited ame etur adi pisicing elit tempor
                      labore.
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__contact clearfix">
                  <h3 className="footer-widget__title">CONTACT</h3>
                  <p className="footer-widget__contact-text">
                    House 54/A, Road 132, Gulshan, Dhaka
                  </p>
                  <div className="footer-widget__contact-info">
                    <div className="footer-widget__contact-icon">
                      <span className="icon-contact"></span>
                    </div>
                    <div className="footer-widget__contact-content">
                      <p className="footer-widget__contact-mail-phone">
                        <a
                          href="mailto:needhelp@wostin.com"
                          className="footer-widget__contact-mail"
                        >
                          rondhan@gmail.com
                        </a>
                        <a
                          href="tel:2463330088"
                          className="footer-widget__contact-phone"
                        >
                          +8801711991713
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div
            className="site-footer-bottom-shape"
            style={{
              backgroundImage:
                "url(assets/images/shapes/site-footer-bottom-shape.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <p className="site-footer__bottom-text">
                    <b>© Copyright 2022 <a href="#">Rondhan.com</a> Developed by VMSL</b>
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
