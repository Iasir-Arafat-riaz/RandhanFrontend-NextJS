import Image from "next/image";
import React from "react";
import projBg from "../../styles/images/background/industries-one-bg.jpg";
import projectImg1 from "styles/images/resource/project1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  console.log(projBg.src);
  const styling = { backgroundImage: `url('${projBg.src}')` };
  return (
    <section className="project-one">
      <div className="project-one-bg-box">
        <div className="project-one-bg" style={styling}></div>
      </div>
      <div className="project-one__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Recent Closed Projects</span>
          <h2 className="section-title__title">
            Recently We Successfully Completed <br /> Some Remarkable Projects
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg1} alt="img" />
              </div>
              <div className="project-one__content">
                <p className="project-one__sub-title">Waste Pickup</p>
                <h3 className="project-one__title">
                  <a href="project-details.html">Grocery Waste Removal</a>
                </h3>
                <div className="project-one__arrow">
                  <a href="project-details.html">
                    <AiOutlineArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg1} alt="img" />
              </div>
              <div className="project-one__content">
                <p className="project-one__sub-title">Waste Pickup</p>
                <h3 className="project-one__title">
                  <a href="project-details.html">Home Trash Picked</a>
                </h3>
                <div className="project-one__arrow">
                  <a href="project-details.html">
                    <AiOutlineArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg1} alt="img" />
              </div>
              <div className="project-one__content">
                <p className="project-one__sub-title">Waste Pickup</p>
                <h3 className="project-one__title">
                  <a href="project-details.html">Construction Collection</a>
                </h3>
                <div className="project-one__arrow">
                  <a href="project-details.html">
                    <AiOutlineArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg1} alt="img" />
              </div>
              <div className="project-one__content">
                <p className="project-one__sub-title">Waste Pickup</p>
                <h3 className="project-one__title">
                  <a href="project-details.html">Business Waste Pickup</a>
                </h3>
                <div className="project-one__arrow">
                  <a href="project-details.html">
                    <AiOutlineArrowRight size={20}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
