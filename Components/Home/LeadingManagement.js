import Link from "next/link";
import Image from 'next/image';
import React from 'react';
import leadingImg from "../../styles/images/resource/leading-waste-img-1.jpg"
import leadingImgShape from "../../styles/images/resource/leading-waste-img-shape-1.png"
import leadingImgShapeDots from "../../styles/images/resource/leading-waste-dots.png"

import {TiTick} from "react-icons/ti"

const LeadingManagement = () => {
    return (
        <section className="leading-waste">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 ">
                        <div className="leading-waste__left">
                            <div className="leading-waste__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="leading-waste__img">
                                    <Image src={leadingImg} alt=""/>
                                </div>
                                <div className="leading-waste__experience">
                                    <p><span>18+</span> <br/> Years of <br/> Experience</p>
                                </div>
                                <div className="leading-waste__img-shape-1 float-bob-x">
                                    <Image src={leadingImgShape} alt=""/>
                                </div>
                                <div className="leading-waste__big-text">
                                    <p>Wostin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="leading-waste__right">
                            {/* <div className="leading-waste-dots">
                                <Image src={leadingImgShapeDots} alt="image"/>
                            </div> */}
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Get to Know About Us</span>
                                <h2 className="section-title__title">Leading in Waste disposal
                                    Management Services</h2>
                            </div>
                            <p className="leading-waste__text">We’re in this business <span>Since 1987</span> and we provide
                                the best services</p>
                            <ul className="list-unstyled leading-waste__points">
                                <li>
                                    <div className="icon">
                                        <span className="fa fa-check"> <TiTick size={70}/></span>
                                    </div>
                                    <div className="text">
 <p>Lorem Ipsum is not simply random text</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fa fa-check"><TiTick size={70}/></span>
                                    </div>
                                    <div className="text">
                                        <p>Making this the first true generator on the Internet</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fa fa-check"><TiTick size={70}/></span>
                                    </div>
                                    <div className="text">
                                        <p>Various versions have evolved over the years</p>
                                    </div>
                                </li>
                            </ul>
                            <Link href="about"><a  className="thm-btn">Details</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadingManagement;