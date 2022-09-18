import React from "react";
import aboutHeaderImg from "public/Images/backgroundImg/backgBanner.png";
import Link from "next/link";

const AboutHEader = () => {
  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${aboutHeaderImg.src})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Who We Are</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>Who We Are</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHEader;
