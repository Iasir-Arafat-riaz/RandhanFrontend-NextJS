import Link from 'next/link';
import React from 'react';

const HomeOrBusiness = () => {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cta-one__inner">
                            <h2 className="cta-one__title">Do You Interested Connect With Us?</h2>
                            <div className="cta-one__btn-box">
                                <Link href="/contact"><a  className="thm-btn cta-one__btn">Contact With Us</a></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOrBusiness;