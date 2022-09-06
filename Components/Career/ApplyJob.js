import React, { useState } from "react";
import axios from "Axios";
const ApplyJob = ({ id }) => {
  // console.log(id);
  const [info, setInfo] = useState(null);
  const applyFormSubmit = (e) => {
    e.preventDefault();

    console.log(info);
    // info.id = id;
    const config = {
      headers: {
        Authorization:
          "Basic Y29uY2F2ZWl0QGdtYWlsLmNvbTp2Ynp0OVEtbVpUN0stRzhmVG1tLXBLZXpw",
      },
    };

    axios
      .post(
        "http://rondhan-admin.vmsl.com.bd/sximoapi?module=careerrequest",
        info,
        config
      )
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log("success");
          document.getElementById("createInfoForm").reset();
        }
      });
  };

  const infoChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        id="createInfoForm"
        onSubmit={applyFormSubmit}
        className="contact-one__form contact-form-validated"
        noValidate="novalidate"
      >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-one__form-input-box">
              <input
                required
                onChange={infoChange}
                type="text"
                placeholder="First name"
                name="firstname"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-one__form-input-box">
              <input
                required
                onChange={infoChange}
                type="text"
                placeholder="Last name"
                name="lastname"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-one__form-input-box">
              <input
                required
                onChange={infoChange}
                type="email"
                placeholder="Email address"
                name="email"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-one__form-input-box">
              <input
                required
                onChange={infoChange}
                type="text"
                placeholder="Phone number"
                name="phone"
              />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-one__form-input-box text-message-box">
              <textarea
                required
                onChange={infoChange}
                name="cover_letter"
                placeholder="Cover Letter"
              ></textarea>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="contact-one__form-input-box">
              <input
                onChange={infoChange}
                name="cv"
                type="file"
                accept="application/pdf"
              />
            </div>
            <div className="contact-one__btn-box mt-5">
              <button type="submit" className="thm-btn contact-one__btn">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
