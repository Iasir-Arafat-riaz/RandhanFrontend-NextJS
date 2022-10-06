import CommonBanner from "Components/sustainability/CommonBanner";

const BeAFarmer = () => {
  const handleSubmitButton = (e) => {
    e.preventDefault();
    alert("will connect server soon");
  };
  return (
    <>
      <CommonBanner headerBanner={`/Images/resources/beaFarmer.png`} />

      <div>
        <div className="row m-5 text-center">
          <div className="col-xl-12 col-lg-12">
            <div className="contact-one__right">
              <h2 className="text-center commonComponentHeader">BE A FARMER</h2>
              <form
                onSubmit={handleSubmitButton}
                className="contact-one__form contact-form-validated"
                noValidate="novalidate"
              >
                <div className="contactBeAPartner">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div className="contactBeAPartner">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="contactBeAPartner">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                </div>
                <div className="contactBeAPartner">
                  <input
                    type="text"
                    placeholder="Address"
                    name="subject"
                    required
                  />
                </div>

                <div className="contact-one__btn-box">
                  <button type="submit" className="thm-btn contact-one__btn">
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeAFarmer;
