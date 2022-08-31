import Image from 'next/image';
import React from 'react';
import weDecImg1 from "../../styles/images/resource/we-dedicated-img.jpg";
import {BiRightArrow} from "react-icons/bi"

const WeDecided = () => {
    return (
        <section className="we-dedicatedv mt-2 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="we-dedicated__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Our Skills & Expertise</span>
                                <h2 className="section-title__title">We are Dedicated to Serve you all Our Time</h2>
                            </div>
                            <p className="we-dedicated__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                            <div className="we-dedicated__progress">
                                <div className="we-dedicated__progress-single">
                                    <h4 className="we-dedicated__progress-title">Waste Management</h4>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="90%">
                                            <div className="count-text">90%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="we-dedicated__progress-single">
                                    <h4 className="we-dedicated__progress-title">Recycling</h4>
                                    <div className="bar marb-0">
                                        <div className="bar-inner count-bar" data-percent="46%">
                                            <div className="count-text">46%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="we-dedicated__right">
                            <div className="we-dedicated__img-box wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <Image src={weDecImg1} alt="dec1"/>
                                <div className="we-dedicated__video-link">
                                    <a target="_blank" href="https://www.youtube.com/watch?v=Get7rqXYrbQ" rel="noopener noreferrer" className="video-popup">
                                        <div className="we-dedicated__video-icon">
                                            <span className="fa fa-play"><BiRightArrow/></span>
                                            <i className="ripple"></i>
                                        </div>
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

export default WeDecided;