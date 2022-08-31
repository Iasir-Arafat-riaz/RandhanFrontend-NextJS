import Image from "next/image";
import React from "react";
import whyChooseImg from "../../styles/images/resource/why-choose-one-img-1.jpg";

const WhyChossUs = () => {
  return (
    <section classNameName="why-choose-one">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-xl-5">
            <div classNameName="why-choose-one__left">
              <div classNameName="why-choose-one__img">
                <Image src={whyChooseImg} alt="" />
              </div>
            </div>
          </div>
          <div classNameName="col-xl-7">
            <div classNameName="why-choose-one__right">
              <div classNameName="why-choose-one__content">
                <h3 classNameName="why-choose-one__title">
                  Why Choose Wostin?
                </h3>
                <p classNameName="why-choose-one__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
                <ul classNameName="list-unstyled why-choose-one__points">
                  <li>
                    <div classNameName="icon">
                      <span classNameName="fa fa-check"></span>
                    </div>
                    <div classNameName="text">
                      <p>Donec fermentum leo id elit commodo, vel sodales</p>
                    </div>
                  </li>
                  <li>
                    <div classNameName="icon">
                      <span classNameName="fa fa-check"></span>
                    </div>
                    <div classNameName="text">
                      <p>Nullam a consequat diam, id pharetra massa</p>
                    </div>
                  </li>
                  <li>
                    <div classNameName="icon">
                      <span classNameName="fa fa-check"></span>
                    </div>
                    <div classNameName="text">
                      <p>Praesent porttitor enim quis risus gravida</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChossUs;
