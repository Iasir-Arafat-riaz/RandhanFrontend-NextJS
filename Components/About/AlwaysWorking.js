import Image from "next/image";
import React from "react";
import AlwaysWorkingImg from "../../public/Images/resources/always-working-img.jpg";
import { TiTick } from "react-icons/ti";

const AlwaysWorking = () => {
  return (
    <section className="always-working">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="always-working__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  About Wostin Company
                </span>
                <h2 className="section-title__title">
                  Always Working for a Clean Tomorrow
                </h2>
              </div>
              <p className="always-working__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim veniam.
              </p>
              <ul className="list-unstyled always-working__points">
                <li>
                  <div className="icon">
                    <span>
                      <TiTick size={20} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Lorem Ipsum is not simply random text</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span>
                      <TiTick size={20} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Making this First true generator on the Internet</p>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled always-working__bottom">
                <li>
                  <div className="always-working__count"></div>
                  <div className="always-working__content">
                    <h3>
                      Going Above <br /> and Beyond
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="always-working__count"></div>
                  <div className="always-working__content">
                    <h3>
                      Committed to <br /> People First
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="always-working__right">
              <div
                className="always-working__img wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <Image src={AlwaysWorkingImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysWorking;
