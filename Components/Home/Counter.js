import React from "react";
import counterImg from "../../public/Images/backgroundImg/main-slider-1-1.jpg";


const Counter = () => {
  const bgStyle = require("../../styles/images/background/counter-one-bg.jpg");
  console.log(counterImg.src);
  const bgStyling = {
    backgroundImage: `url(${counterImg.src})`,
    backgroundAttachment: "fixed",
  };
  return (
    <section className="counter-one">
     <video  loop autoPlay muted>
     <source src="/nature.mp4"/>
     </video>
      <div className=" videoContent p-3">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="counter-one__single ">
              <div className="counter-one__top">
                <div className="counter-one__count">
                  <h2 className="odometer" data-count="260">
                  100+
                  </h2>
                  <span className="counter-one__plus"></span>
                </div>
                <div className="counter-one__icon">
                  <span className="icon-recycling-symbol"></span>
                </div>
              </div>
              <h3 className="counter-one__title">Customer Served</h3>
              <p className="counter-one__text">
                Lorem Ipsum is simply dummy <br /> ext of the new design.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="counter-one__single">
              <div className="counter-one__top">
                <div className="counter-one__count">
                  <h2 className="odometer" data-count="3600">
                    2000KG
                  </h2>
                </div>
                <div className="counter-one__icon">
                  <span className="icon-recycling-symbol"></span>
                </div>
              </div>
              <h3 className="counter-one__title">Agro Product</h3>
              <p className="counter-one__text">
                Lorem Ipsum is simply dummy <br /> ext of the new design.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="counter-one__single">
              <div className="counter-one__top">
                <div className="counter-one__count">
                  <h2 className="odometer" data-count="890">
                    90%
                  </h2>
                  <span className="counter-one__plus"></span>
                </div>
                <div className="counter-one__icon">
                  <span className="icon-recycling-symbol"></span>
                </div>
              </div>
              <h3 className="counter-one__title">Happy Customers</h3>
              <p className="counter-one__text">
                Lorem Ipsum is simply dummy <br /> ext of the new design.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="counter-one__single">
              <div className="counter-one__top">
                <div className="counter-one__count">
                  <h2 className="odometer" data-count="890">
                    20+
                  </h2>
                  <span className="counter-one__plus"></span>
                </div>
                <div className="counter-one__icon">
                  <span className="icon-recycling-symbol"></span>
                </div>
              </div>
              <h3 className="counter-one__title">Acres of Land</h3>
              <p className="counter-one__text">
                Lorem Ipsum is simply dummy <br /> ext of the new design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
