import Image from "next/image";
import React from "react";
import industryImg4 from "public/Images/resources/agrotech.png";
import industryImg1 from "public/Images/resources/consumer.png";
import industryImg2 from "public/Images/resources/empowerment.png";
import industryImg3 from "public/Images/resources/employment.png";
import { MdAgriculture } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { FaUserInjured } from "react-icons/fa";

import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
const Industries = () => {
  const img = require("../../styles/images/background/industries-one-bg.jpg");
  //   console.log(img.default.src);
  const styling = {
    backgroundImage: `url('${img.default.src}')`,
  };
  return (
    <section className="industries-one">
      <div className="industries-one-bg" style={styling}></div>
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">WE WORK FOR</span>
          {/* <h2 className="section-title__title">Industries We Served</h2> */}
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4  wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image src={industryImg4} alt="image" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery">
                    <MdAgriculture size={40} />
                  </span>
                </div>
                <h3 className="industries-one__title">
                  <Link href="/weWorkFor/agroTech"><a >AGRO TECH</a></Link>
                  
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <Link href="/weWorkFor/agroTech"><a>
                    <i>
                      <AiOutlineArrowRight size={20} />
                    </i>
                  </a></Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4  wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image src={industryImg1} alt="" />
              </div>

              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-shop">
                    <FaUserInjured size={40} />
                  </span>
                </div>
                <h3 className="industries-one__title">
                  <Link href="/weWorkFor/consumer"><a>CONSUMER</a></Link>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <Link href="/weWorkFor/consumer"><a>
                    <i>
                      <AiOutlineArrowRight size={20} />
                    </i>
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4  wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image src={industryImg2} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery">
                    <ImPowerCord size={40} />
                  </span>
                </div>
                <h3 className="industries-one__title">
                  <Link href="/weWorkFor/empowerment"><a>EMPOWERMENT</a></Link>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <Link href="/weWorkFor/empowerment"><a>
                    <i>
                      <AiOutlineArrowRight size={20} />
                    </i>
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4  wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image src={industryImg3} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery">
                    <FaUserTie size={40} />
                  </span>
                </div>
                <h3 className="industries-one__title">
                  <Link href="/weWorkFor/employment"><a >EMPLOYMENT</a></Link>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <Link href="/weWorkFor/employment"><a>
                    <i>
                      <AiOutlineArrowRight size={20} />
                    </i>
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
