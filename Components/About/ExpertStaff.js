import Image from "next/image";
import React from "react";
import staffShape from "../../styles/images/shapes/team-one-shape.png";
import staff1 from "public/Images/team/staff1.jpg";
import staff2 from "../../styles/images/team/team-1-2.jpg";
import staff3 from "public/Images/team/staff3.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const ExpertStaff = () => {
  return (
    <section className="team-one">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">TEAM BEHIND SUCCESS</span>
          {/* <h2 className="section-title__title">Expert Staff & Members</h2> */}
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            {/* Team One Single */}
            <div className="team-one__sngle text-center">
              <div className="team-one__img">
                <Image src="/Images/team/staff1.jpg"  width={400} height={400} alt="image" />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">CEO & FOUNDER</p>
                <h3 className="team-one__name">ASRAFUZZAMAN</h3>
                <div className="team-one__social-box">
                  <div className="team-one__social">
                    <a href="#">
                      <BsFacebook />
                    </a>
                    <a href="#">
                      <AiFillTwitterCircle size={20} />
                    </a>
                    <a href="#">
                      <BsPinterest />
                    </a>
                    <a href="#">
                      <AiFillInstagram size={20} />
                    </a>
                  </div>
                  <div className="team-one__arrow">
                    <a href="staff-details.html">
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
          >
            {/* Team One Single */}
            <div className="team-one__sngle text-center">
              <div className="team-one__img">
                <Image src="/Images/team/staff2.jpeg"  width={400} height={400} alt="image"/>
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">Co Founder</p>
                <h3 className="team-one__name">TOHA HOSSAIN</h3>
                <div className="team-one__social-box">
                  <div className="team-one__social">
                    <a href="#">
                      <BsFacebook />
                    </a>
                    <a href="#">
                      <AiFillTwitterCircle size={20} />
                    </a>
                    <a href="#">
                      <BsPinterest />
                    </a>
                    <a href="#">
                      <AiFillInstagram size={20} />
                    </a>
                  </div>
                  <div className="team-one__arrow">
                    <a href="staff-details.html">
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="300ms"
          >
            {/* Team One Single */}
            <div className="team-one__sngle text-center">
              <div className="team-one__img">
                <Image src="/Images/team/staff3.jpg"  width={400} height={400} alt="image" />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">HR & ADMIN</p>
                <h3 className="team-one__name">FARIYA HOSSAIN</h3>
                <div className="team-one__social-box">
                  <div className="team-one__social">
                    <a href="#">
                      <BsFacebook />
                    </a>
                    <a href="#">
                      <AiFillTwitterCircle size={20} />
                    </a>
                    <a href="#">
                      <BsPinterest />
                    </a>
                    <a href="#">
                      <AiFillInstagram size={20} />
                    </a>
                  </div>
                  <div className="team-one__arrow">
                    <a href="staff-details.html">
                      <AiOutlineArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertStaff;
