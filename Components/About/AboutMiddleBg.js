import React from "react";
import aboutMiddleBgImg from "../../public/Images/backgroundImg/manage-waste-bg.jpg";

const AboutMiddleBg = () => {
  return (
    <section className="manage-waste manage-waste-two">
      <div className="manage-waste-bg-box">
        <div
          className="manage-waste-bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          style={{
            backgroundImage: `url(${aboutMiddleBgImg.src})`,
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="manage-waste__inner">
              <h3 className="manage-waste__title">
                Manage Waste Ef-fectively <br /> and Reduce Environmental Impact
              </h3>
              <div className="manage-waste__btn-box">
                <a
                  href="request-pickup.html"
                  className="thm-btn manage-waste__btn-1"
                >
                  Request a Pickup
                </a>
                <a href="contact.html" className="thm-btn manage-waste__btn-2">
                  Contact With us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMiddleBg;
