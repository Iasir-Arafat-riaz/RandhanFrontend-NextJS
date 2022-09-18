import React from "react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { GiCow } from "react-icons/gi";

import { GiFlatfish } from "react-icons/gi";
import Link from "next/link";

const FeatureOne = () => {
  return (
    <section className="feature-one">
      <div className="container">
        <div className="feature-one__inner">
          <ul className="list-unstyled feature-one__list">
            <li className="feature-one__single " data-wow-delay="100ms">
              <div className="feature-one__icon">
                <span className="icon-budget">
                  <MdPrecisionManufacturing size={50} />
                </span>
              </div>
              <h3 className="feature-one__title ">
                <Link href="projects/manufacturing"><a >MANUFACTURING</a></Link>
              </h3>
            </li>
            <li className="feature-one__single " data-wow-delay="200ms">
              <div className="feature-one__icon">
                <span className="icon-calendar">
                  <GiFarmer size={50}/>
                </span>
              </div>
              <h3 className="feature-one__title ">
              <Link href="projects/farming"><a>FARMING</a></Link>
              </h3>
            </li>
            <li className="feature-one__single " data-wow-delay="300ms">
              <div className="feature-one__icon">
                <span className="icon-garbage">
                  <GiCow size={50} />
                </span>
              </div>
              <h3 className="feature-one__title ">
                <Link href="projects/cattle"><a >CATTLE</a></Link>
              </h3>
            </li>
            <li className="feature-one__single " data-wow-delay="400ms">
              <div className="feature-one__icon">
                <span className="icon-garbage-truck">
                  <GiFlatfish size={50}/>
                </span>
              </div>
              <h3 className="feature-one__title ">
                <Link href="projects/fisheries"><a >FISHERIES</a></Link>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
