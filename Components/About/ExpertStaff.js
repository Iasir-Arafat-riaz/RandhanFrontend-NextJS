import Image from "next/image";
import React from "react";
import staffShape from "../../styles/images/shapes/team-one-shape.png";

import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

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
                <Image
                  src="/Images/team/staff1.png"
                  width={400}
                  height={400}
                  alt="image"
                />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">DIRECTOR</p>
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
                    <Link href="/">
                      <a>
                        <AiOutlineArrowRight size={20} />
                      </a>
                    </Link>
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
                <Image
                  src="/Images/team/staff2.jpeg"
                  width={400}
                  height={400}
                  alt="image"
                />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">MANAGING DIRECTOR</p>
                <h3 className="team-one__name">MOHAMMAD MAHFUJUL HAQUE</h3>
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
                    <Link href="/">
                      <a>
                        <AiOutlineArrowRight size={20} />
                      </a>
                    </Link>
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
                <Image
                  src="/Images/team/staff3.jpeg"
                  width={400}
                  height={400}
                  alt="image"
                />
                <div className="team-one__shape">
                  <Image src={staffShape} alt="img" />
                </div>
              </div>
              <div className="team-one__content">
                <p className="team-one__title">SENIOR DIRECTOR</p>
                <h3 className="team-one__name">KABIR</h3>
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
                    <Link href="/">
                      <a>
                        <AiOutlineArrowRight size={20} />
                      </a>
                    </Link>
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
