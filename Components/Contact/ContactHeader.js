import React from "react";
import contactHeaderImg from "public/Images/backgroundImg/contact-banner.png";

import Link from "next/link";

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
          <h2>CONTACT US</h2>
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
