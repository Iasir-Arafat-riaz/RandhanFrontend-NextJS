import React from 'react';
import {FiPhoneCall} from "react-icons/fi"

const HaveWaste = () => {
    return (
        <section className="have-waste">
        <div className="container">
            <div className="have-waste__inner wow fadeInUp" data-wow-delay="100ms">
                <div className="have-waste__left">
                    <h3 className="have-waste__content text-light">info@rondhan.com</h3>
                    
                </div>
                <div className="have-waste__icon">
                        <span className="icon-phone-ringing"><FiPhoneCall/></span>
                    </div>
                <div className="have-waste__right">
                <h3 className="have-waste__content text-light">+8801738022033</h3>
                    {/* <h4 className="have-waste__contact-info">
                        <span className="have-waste__contact-text">Lorem ipsum dolor sit am cons sid</span>
                        <a href="tel:12463330079" className="have-waste__contact-number">+1- ( 246 ) 333 -0079</a>
                    </h4> */}
                </div>
            </div>
        </div>
    </section>
    );
};

export default HaveWaste;
