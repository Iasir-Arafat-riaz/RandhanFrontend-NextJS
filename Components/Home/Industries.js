import Image from "next/image";
import React from "react";
import industryImg1 from "../../styles/images/resource/industy-page-header-img.jpg";
import industryImg2 from "../../styles/images/resource/industries-1-2.jpg";
import industryImg3 from "../../styles/images/resource/industries-1-3.jpg";
import {FaHotel} from "react-icons/fa"
import {FaStethoscope} from "react-icons/fa"
import {SiHomeassistantcommunitystore} from "react-icons/si"
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
          <span className="section-title__tagline">We Cover Industries</span>
          <h2 className="section-title__title">Industries We Served</h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-4  wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image src={industryImg1} alt="" />
              </div>

              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-shop"><FaHotel/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">Consumer</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site, qui
                  nesciunt eque sit porro.
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
            className="col-xl-4 col-lg-4  wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image style={{ height: "1500px" }} src={industryImg1} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery"><FaStethoscope/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">Empowerment</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site, qu
                  nesciunt eque sit porro.
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
            className="col-xl-4 col-lg-4  wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="industries-one__single">
              <div className="industries-one__img">
                <Image style={{ height: "1500px" }} src={industryImg1} alt="" />
              </div>
              <div className="industries-one__content">
                <div className="industries-one__icon">
                  <span className="icon-grocery"><SiHomeassistantcommunitystore/></span>
                </div>
                <h3 className="industries-one__title">
                  <a href="industry-details.html">Employement</a>
                </h3>
                <p className="industries-one__text">
                  Sed quia magni dolores eos ratione voluptatem sequi site, qui
                  nesciunt eque sit porro.
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
