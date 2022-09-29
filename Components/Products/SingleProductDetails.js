import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProductDetails = ({ singleProd }) => {
  return (
    <div className="singleProdDetails">
      <div className="row singleProdInner">
        <div className="col-xl-3 col-md-12">
          <div className="mt-2">
            <Image
              src={singleProd?.photo}
              width={400}
              height={300}
              alt="image"
            />
          </div>
        </div>
        <div className="col-xl-9 col-md-12">
          <div className="mt-2">
            <h3>
              <b>{singleProd?.name}</b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              corporis placeat accusantium reiciendis sint omnis aliquam dolores
              tempora minima, ad, quasi facere eius, velit excepturi consectetur
              deleniti asperiores nam nostrum impedit. Voluptates ratione dicta
              fugit, magnam facilis quaerat atque velit veniam explicabo magni
              labore non numquam asperiores illo accusamus nostrum! Maiores sunt
              tenetur similique illo dolor architecto beatae eaque eius sequi
              nam dolorum veritatis aut voluptates fugit, iusto ratione quas.
              Dicta, aliquid. Eligendi quaerat natus amet, pariatur consequatur
              explicabo recusandae. Voluptatem veritatis illo culpa atque
              cumque, dolorum ullam quis id quia ad excepturi, a dicta
              repudiandae eligendi beatae, velit libero.
            </p>
            <Link href="/contact"><a><button className="prodButton mt-2">Get Code</button></a></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
