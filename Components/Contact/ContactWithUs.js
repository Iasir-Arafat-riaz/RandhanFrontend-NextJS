import React from "react";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { useRouter } from "next/router";

const ContactWithUs = () => {
  const router = useRouter();
  const goBeAPartner=()=>{
    router.push("contact/be-A-Partner")
  }
  const contactFormSubmit = (e) => {
    e.preventDefault();
    alert("not connected with server... will connect soon");
  };
  return (
    <section className="contact-one contact-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">CONTACT WITH US</span>
                {/* <h2 className="section-title__title">
                  Have Questions? Feel Free to Write
                </h2> */}
              </div>
              {/* <p className="contact-one__text">
                Lorem ipsum dolor sit amet, consectetur notted adipis not icing
                elit sed do eiusmod tempor incididunt.
              </p> */}
              <ul className="list-unstyled contact-one__info">
                <li>
                  <div className="icon">
                    <span className="icon-message">
                      <BiPhoneCall size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Call Anytime</p>
                    <a href="tel:12463330088">+8801711991713</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-phone-call">
                      <MdOutlineForwardToInbox size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Write Email</p>
                    <a href="mailto:needhelp@wostin.com">rondhan@gmail.com</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-placeholder">
                      <MdLocationOn size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Corporate Office</p>
                    <span>House 54/A, road 134, Gulshan</span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-placeholder">
                      <FaIndustry size={30} />
                    </span>
                  </div>
                  <div className="text">
                    <p>Factory Address</p>
                    <span>Danaidah, Boraigram, Natore 6613, Bangladesh</span>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{marginTop:"50px"}}>
              <button onClick={goBeAPartner} className="thm-btn contact-one__btn ">
                Be A Partner
              </button>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__right">
              <form
                onSubmit={contactFormSubmit}
                className="contact-one__form contact-form-validated"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="contact-one__form-input-box">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact-one__form-input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Write Message"
                        required
                      ></textarea>
                    </div>
                    <div className="contact-one__btn-box">
                      <button
                        type="submit"
                        className="thm-btn contact-one__btn"
                      >
                        Send a Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;
