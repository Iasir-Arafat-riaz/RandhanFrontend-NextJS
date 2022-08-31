import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo1 from "../../styles/images/logo-1.png";
import serviceLogo from "../../styles/images/services/service-m-1-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <>
      {/* <div className="preloader">
        <img className="preloader__image" width="60" src="assets/images/loader.png" alt="" />
 </div> */}
      <div>
        <header className="main-header clearfix ">
          <div className="main-header__inner clearfix">
            <div className="main-header__logo">
              {/* <a href="index.html"><img src="assets/images/resources/logo-1.png" alt=""></a> */}
              <Link href="/">
                <Image src={logo1} alt="logoOne" />
              </Link>
            </div>
            <div className="main-menu__menu-box">
              <div className="main-menu__menu-top">
                <div className="main-menu__menu-top-left">
                  <p className="main-menu__menu-top-text">
                    Welcome To Waste Disposal & Pickup Services.
                  </p>
                  <div className="main-menu__menu-top-btn-box">
                    <a
                      href="request-pickup.html"
                      className="thm-btn main-menu__menu-top-btn"
                    >
                      Request a Pickup
                    </a>
                  </div>
                </div>
                <div className="main-menu__menu-top-right">
                  <ul className="list-unstyled main-menu__menu-top-address">
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:needhelp@company.com">
                            needhelp@wostin.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Mon - Sat 8:00 - 6:30, Sunday - Off</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-menu__menu-bottom">
                <nav className="main-menu clearfix">
                  <div className="main-menu__main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faLocation} />
                      </i>
                    </a>
                    <ul className="main-menu__list">
                      <li className="dropdown">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                        <ul>
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index3.html">Home Three</a>
                          </li>
                          <li className="dropdown">
                            <a href="#">Header Styles</a>
                            <ul>
                              <li>
                                <a href="index.html">Header One</a>
                              </li>
                              <li>
                                <a href="index2.html">Header Two</a>
                              </li>
                              <li>
                                <a href="index3.html">Header Three</a>
                                <ul>
                                  <li>
                                    <a href="index.html">Header One</a>
                                  </li>
                                  <li>
                                    <a href="index2.html">Header Two</a>
                                  </li>
                                  <li>
                                    <a href="index3.html">Header Three</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </li>

                      <li className="dropdown">
                        <Link href="/recentStories"><a >Recent Stories</a></Link>
                        
                        <ul>
                          <li>
                            <a href="industries.html">Industries</a>
                          </li>
                          <li>
                            <a href="industries-carousel.html">
                              Industries Carousel
                            </a>
                          </li>
                          <li>
                            <a href="industry-details.html">Industry Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/sustainability">
                        
                          <a>Sustainability</a>
                        </Link>

                        <ul>
                          <li>
                            <a href="projects.html">Projects</a>
                          </li>
                          <li>
                            <a href="projects-carousel.html">
                              Projects Carousel
                            </a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="request-pickup.html">Request A Pickup</a>
                          </li>
                          <li>
                            <a href="staff.html">Staff</a>
                          </li>
                          <li>
                            <a href="staff-carousel.html">Staff Carousel</a>
                          </li>
                          <li>
                            <a href="staff-details.html">Staff Details</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="testimonials-carousel.html">
                              Testimonials Carousel
                            </a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQs</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                      <Link href="/career">
                          <a>Career</a>
                        </Link>

                        <ul>
                          <li>
                            <a href="news.html">News</a>
                          </li>
                          <li>
                            <a href="news-carousel.html">News Carousel</a>
                          </li>
                          <li>
                            <a href="news-sidebar.html">News Sidebar Right</a>
                          </li>
                          <li>
                            <a href="news-sidebar-left.html">
                              News Sidebar Left
                            </a>
                          </li>
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="main-header__right">
              <div className="main-header__right__call-icon">
                <span className="icon-phone-ringing">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhone}
                    // style={{ color: "yellow", marginRight:"5px" }}
                  />
                </span>
              </div>
              <div className="main-header__right-call-number">
                <p>Have Waste/Pickup?</p>
                <h5>
                  <a href="tel:12463330088">+ 1- (246) 333-0088</a>
                </h5>
              </div>
            </div>
          </div>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
          {/* <!-- /.sticky-header__content --> */}
        </div>
      </div>
      <div className="mobile-nav__wrapper ">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* <!-- /.mobile-nav__overlay --> */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              {/* <img
                  src="assets/images/resources/footer-logo.png"
                  width="155"
                  alt=""
                /> */}
            </a>
          </div>
          {/* <!-- /.logo-box --> */}
          <div className="mobile-nav__container"></div>
          {/* <!-- /.mobile-nav__container --> */}

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@packageName__.com">
                needhelp@wostin.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* <!-- /.mobile-nav__contact --> */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
            {/* <!-- /.mobile-nav__social --> */}
          </div>
          {/* <!-- /.mobile-nav__top --> */}
        </div>
        {/* <!-- /.mobile-nav__content --> */}
      </div>
    </>
  );
};

export default Navigation;


