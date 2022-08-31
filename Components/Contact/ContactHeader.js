import React from "react";
import contactHeaderImg from "../../public/Images/backgroundImg/page-header-bg.jpg";
import Link from "next/Link";

const ContactHeader = () => {
  console.log(contactHeaderImg.src);
  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${contactHeaderImg.src})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Contact Us</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
