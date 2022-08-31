import React from 'react';
import aboutHeaderImg from "../../public/Images/backgroundImg/page-header-bg.jpg"
import Link from "next/link";

const AboutHEader = () => {
    return (
        <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage:`url(${aboutHeaderImg.src})`}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>About Us</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link href="/"><a >Home</a></Link></li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutHEader;