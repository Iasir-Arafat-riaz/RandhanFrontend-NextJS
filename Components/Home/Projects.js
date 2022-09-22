import Image from "next/image";
import React from "react";
import projBg from "public/Images/backgroundImg/natureBg2.jpg";
import projectImg1 from "public/Images/projects/manufecturingProj.png";
import projectImg2 from "public/Images/projects/farmingProject.png";
import projectImg3 from "public/Images/projects/cattleProject.png";
import projectImg4 from "public/Images/projects/fisheriesProject.png";
import projectImg5 from "public/Images/projects/handicraftProject.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

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
          <h2 style={{fontSize:"30px"}} className="section-title__title">RECENT PROJECTS</h2>
          {/* <h2 className="section-title__title">
            Recently We Successfully Completed <br /> Some Remarkable Projects
          </h2> */}
        </div>
        <div className="row p-3 projectMainDiv">
          <div
            className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp mx-3"
            data-wow-delay="100ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg1} alt="img" />
              </div>
              <div className="project-one__content">
                <Link href="/projects/manufacturing"><a><p className="project-one__sub-title">MANUFACTURING</p></a></Link>
                <h3 className="project-one__title">
                  <Link href="/projects/manufacturing">
                    <a>About Manufacturing</a>
                  </Link>
                </h3>
                {/* <div className="project-one__arrow">
                  <Link href="/projects/manufacturing">
                    <a>
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp mx-3"
            data-wow-delay="200ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg2} alt="img" />
              </div>
              <div className="project-one__content">
                <Link href="/projects/farming"><a><p className="project-one__sub-title">FARMING</p></a></Link>
                <h3 className="project-one__title">
                  <Link href="/projects/farming">
                    <a>Home Trash Picked</a>
                  </Link>
                </h3>
                {/* <div className="project-one__arrow">
                  <Link href="/projects/farming">
                    <a>
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp mx-3"
            data-wow-delay="300ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg3} alt="img" />
              </div>
              <div className="project-one__content">
                <Link href="/projects/cattle"><a><p className="project-one__sub-title">CATTLE</p></a></Link>
                <h3 className="project-one__title">
                  <Link href="/projects/cattle">
                    <a>Construction Collection</a>
                  </Link>
                </h3>
                {/* <div className="project-one__arrow">
                  <Link href="/projects/cattle">
                    <a>
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp mx-3"
            data-wow-delay="400ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg4} alt="img" />
              </div>
              <div className="project-one__content">
                <Link href="/projects/fisheries"><a><p className="project-one__sub-title">FISHERIES</p></a></Link>
                <h3 className="project-one__title">
                  <Link href="/projects/fisheries">
                    <a>Business Waste Pickup</a>
                  </Link>
                </h3>
                {/* <div className="project-one__arrow">
                  <Link href="/projects/fisheries">
                    <a>
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp mx-3"
            data-wow-delay="400ms"
          >
            {/* Project One Single */}
            <div className="project-one__single">
              <div className="project-one__img">
                <Image src={projectImg5} alt="img" />
              </div>
              <div className="project-one__content">
                <Link href="/projects/handicraft"><a><p className="project-one__sub-title">HANDICRAFT</p></a></Link>
                <h3 className="project-one__title">
                  <Link href="/projects/handicraft">
                    <a>Business Waste Pickup</a>
                  </Link>
                </h3>
                {/* <div className="project-one__arrow">
                  <Link href="/projects/handicraft">
                    <a>
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
