import Link from 'next/link';
import React from 'react';

const CommonBanner = ({headerBanner,title}) => {
    return (
        <div>
             <section className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${headerBanner})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>{title}</h2>
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
        </div>
    );
};

export default CommonBanner;