import Image from "next/image";
import React from "react";

const CultureDetails = () => {
  return (
    <div className="mt-5 mb-5">
        <div className="m-3">
      <h2 className="text-center">
        <b>OUR CULTURE AND VALUES</b>
      </h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 text-center px-5 mt-5">
          <Image
            src="/Images/about/culture1.png"
            width={100}
            height={100}
            alt="image"
          />
          <h4 className="mb-3">
            <b>Trust and Integrity</b>
          </h4>
          <p>
            We want to build an environment in which mutual trust can develop
            and that allows us to discuss matters openly. It gives us the
            confidence to admit when we are wrong and the courage to change.
            Integrity means that we are truthful and honest. When faced with
            difficult decisions and hard choices, we do the right thing, even in
            the face of adversity
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 text-center px-5 mt-5">
          <Image
            src="/Images/about/culture2.png"
            width={100}
            height={100}
            alt="image"
          />
          <h4 className="mb-3">
            <b>Judgment</b>
          </h4>
          <p>
            We want people to use their best judgment. It is the ability to
            combine personal qualities with relevant knowledge and experience to
            form opinions and make quick decisions. We admire people who can
            make wise decisions despite ambiguity and can identify root causes,
            and not just emphasize on treating symptoms. While intuition is
            relevant
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 text-center px-5 mt-5">
          <Image
            src="/Images/about/culture3.png"
            width={100}
            height={100}
            alt="image"
          />
          <h4 className="mb-3">
            <b>Curiousness</b>
          </h4>
          <p>
            We see change as an opportunity to improve. We frequently push
            ourselves out of our comfort zone. Our learning mindset ensures we
            reflect and learn from our successes and failures. We want to think
            that it is always “day 1” and do not get complacent. Want to learn
            and unlearn rapidly and eagerly and when required to operate
            outside.
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 text-center px-5 mt-5">
          <Image
            src="/Images/about/culture4.png"
            width={100}
            height={100}
            alt="image"
          />
          <h4 className="mb-3">
            <b>Courage</b>
          </h4>
          <p>
            We have the courage to think big and make it happen. We create and
            communicate bold direction and think big to serve our customers and
            inspire results. Thinking big is often about taking risks and
            failing and we need all the courage to do so. We want people to say
            what they think, when it’s in the best interest of iFarmer, even if
            it is uncomfortable.
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 text-center px-5 mt-5">
          <Image
            src="/Images/about/culture5.png"
            width={100}
            height={100}
            alt="image"
          />
          <h4 className="mb-3">
            <b>Impact and Inclusiveness</b>
          </h4>
          <p>
            We believe that we are on the face of the Earth to create impact
            that will change the world not for just a few but for many no matter
            what their background, gender, religion be. We admire people who see
            the world as it is and have the audacity to imagine the world as it
            could be. No level of individual excellence justifies undermining
            people.
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 text-center px-5 mt-5">
          <Image
            src="/Images/about/culture6.png"
            width={100}
            height={100}
            alt="image"
          />
          <h4 className="mb-3">
            <b>Getting things done</b>
          </h4>
          <p>
            We focus on the key outputs for our business and deliver them with
            the right quality and in a timely fashion. Despite setbacks, we rise
            to the occasion and deliver what is expected from us. We want to
            focus on results over process and create new ideas that prove
            useful. If necessary, we challenge prevailing assumptions, and
            suggest better.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CultureDetails;
