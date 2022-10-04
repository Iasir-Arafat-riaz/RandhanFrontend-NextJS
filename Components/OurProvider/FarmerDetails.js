import Link from "next/link";
import React from "react";

const FarmerDetails = () => {
  return (
    <div className="m-3">
      <div className="mt-5 mb-5">
        <h2 className="mb-3 commonComponentHeader">
          <b>FARMER</b>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          quas praesentium quidem voluptatem pariatur aperiam tempore aut
          molestias ullam hic qui porro enim recusandae iure voluptatibus
          eligendi in, quasi deleniti, esse, eaque doloribus placeat et fugit!
          Consectetur soluta, repudiandae natus praesentium ab voluptatibus vero
          dolores quaerat eaque quam eius ducimus nulla dignissimos atque sint
          tempore numquam a recusandae quo perferendis at dolorem libero enim
          molestiae! Culpa, deleniti optio sunt ex rerum dolorum! Soluta sunt
          error nisi, possimus consequuntur ipsum magni odio hic doloribus
          provident architecto id totam atque sit tempora quibusdam tempore
          molestiae commodi non beatae cum ea labore? Nisi?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consequuntur consectetur illum quas dolorem adipisci! Deleniti
          excepturi quo necessitatibus suscipit. Est corporis maiores, voluptas
          fugiat dicta nobis, molestias recusandae quisquam impedit quo iste
          facere voluptatum numquam illum commodi dolores asperiores! Eaque
          error eligendi quasi vitae omnis animi distinctio et rerum architecto
          impedit inventore praesentium modi laboriosam illum, atque voluptates
          aliquid!
        </p>
        <div className="mt-2">
          <Link href="/contact/be-A-Farmer">
            <a>
              <button className="thm-btn contact-one__btn ">Be A Farmer</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FarmerDetails;
