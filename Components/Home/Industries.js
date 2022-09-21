import Image from "next/image";
import React from "react";
import industryImg1 from "../../styles/images/resource/consumer.jpg";
import industryImg2 from "../../styles/images/resource/empwerment.png";
import industryImg3 from "../../styles/images/resource/employment.png";
import {MdAgriculture} from "react-icons/md"
import {FaUserTie} from "react-icons/fa"
import {ImPowerCord} from "react-icons/im"
import {FaUserInjured} from "react-icons/fa"

import {AiOutlineArrowRight} from "react-icons/ai"
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
                <Image  src={industryImg3} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery"><MdAgriculture size={50}/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">AGRO TECH</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <a href="industry-details.html">
                  <i ><AiOutlineArrowRight size={20}/></i>
                  </a>
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
                  <span className="icon-shop">< FaUserInjured size={50}/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">CONSUMER</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <a href="industry-details.html">
                  <i ><AiOutlineArrowRight size={20}/></i>
                  </a>
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
                <Image  src={industryImg2} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery"><ImPowerCord size={50}/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">EMPOWERMENT</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <a href="industry-details.html">
                  <i ><AiOutlineArrowRight size={20}/></i>
                  </a>
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
                <Image  src={industryImg3} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery"><FaUserTie size={50}/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">EMPLOYMENT</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site.
                </p>
                <div className="industries-one__arrow">
                  <a href="industry-details.html">
                  <i ><AiOutlineArrowRight size={20}/></i>
                  </a>
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
