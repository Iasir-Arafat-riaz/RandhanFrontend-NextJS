import Image from 'next/image';
import React from 'react';
import blogImg1 from "../../styles/images/blog/news-1-1.jpg"
import blogImg2 from "../../styles/images/blog/news-1-2.jpg"
import blogImg3 from "../../styles/images/blog/news-1-3.jpg"

const LatestNews = () => {
    return (
        <section className="news-one">
        <div className="container">
            <div className="section-title text-center">
                <span className="section-title__tagline">What’s Happening</span>
                <h2 className="section-title__title">Latest News & Articles</h2>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                {/* News One Single */}
                    <div className="news-one__single">
                        <div className="news-one__img">
                            <Image src={blogImg1} alt=""/>
                            <div className="news-one__date">
                                <p>20 Dec</p>
                            </div>
                            <a href="news-details.html">
                                <span className="news-one__plus"></span>
                            </a>
                        </div>
                        <div className="news-one__content">
                            <ul className="list-unstyled news-one__meta">
                                <li><a href="news-details.html"><i className="far fa-clock"></i> by Admin </a>
                                </li>
                                <li><span>/</span></li>
                                <li><a href="news-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                                </li>
                            </ul>
                            <h3 className="news-one__title"><a href="news-details.html">Waste Management Container or
                                    Bin for my Home?</a></h3>
                            <div className="news-one__read-more">
                                <a href="news-details.html"><i className="fa fa-arrow-right"></i>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                {/* News One Single */}
                    <div className="news-one__single">
                        <div className="news-one__img">
                        <Image src={blogImg2} alt=""/>
                            <div className="news-one__date">
                                <p>20 Dec</p>
                            </div>
                            <a href="news-details.html">
                                <span className="news-one__plus"></span>
                            </a>
                        </div>
                        <div className="news-one__content">
                            <ul className="list-unstyled news-one__meta">
                                <li><a href="news-details.html"><i className="far fa-clock"></i> by Admin </a>
                                </li>
                                <li><span>/</span></li>
                                <li><a href="news-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                                </li>
                            </ul>
                            <h3 className="news-one__title"><a href="news-details.html">Leverage agile frameworks to
                                    provide best service</a></h3>
                            <div className="news-one__read-more">
                                <a href="news-details.html"><i className="fa fa-arrow-right"></i>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                {/* News One Single */}
                    <div className="news-one__single">
                        <div className="news-one__img">
                        <Image src={blogImg3} alt="img"/>
                            <div className="news-one__date">
                                <p>20 Dec</p>
                            </div>
                            <a href="news-details.html">
                                <span className="news-one__plus"></span>
                            </a>
                        </div>
                        <div className="news-one__content">
                            <ul className="list-unstyled news-one__meta">
                                <li><a href="news-details.html"><i className="far fa-clock"></i> by Admin </a>
                                </li>
                                <li><span>/</span></li>
                                <li><a href="news-details.html"><i className="far fa-comments"></i> 2 Comments</a>
                                </li>
                            </ul>
                            <h3 className="news-one__title"><a href="news-details.html">Bring to the table win-win
                                    survival strategis to identify</a></h3>
                            <div className="news-one__read-more">
                                <a href="news-details.html"><i className="fa fa-arrow-right"></i>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default LatestNews;