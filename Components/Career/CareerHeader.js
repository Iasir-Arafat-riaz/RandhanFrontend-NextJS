import Link from "next/link";
import React from "react";
import careerHeaderImg from "../../public/Images/backgroundImg/banner-career.jpg";
import Head from "next/head";
const CareerHeader = () => {
  return (
    <section className="career-header">
     
      <div
        className="career-header-bg"
        style={{ backgroundImage: `url(${careerHeaderImg.src})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner careerHeaderDiv">
          <h2 className="text-light pt-5 text-center">
            JOIN WITH RONDHAN FAMILY
          </h2>
          <h5 className="text-light pt-3  ">
            RONDHAN works toward the digitalization of the future. As
            entrepreneurs, we offer services with innovation and deliver
            end-to-end solutions for our clients. To transform the businesses in
            ways the industry has never seen before, RONDHAN provides innovation
            and digitalization with Hi-technology. We believe the reason behind
            every success is our teams strength and proficiency. We are
            committed to the establishment of a sophisticated, inclusive
            atmosphere, where everyone is valued and appreciated, no matter who
            they are. We know that knowledge is continual, hence we are devoted
            to take part in advancing the future of our our purpose and values.
            You can learn more about
          </h5>
        </div>
      </div>
    </section>
  );
};

export default CareerHeader;
