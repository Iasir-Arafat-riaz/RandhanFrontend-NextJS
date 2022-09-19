import CommonBanner from "Components/sustainability/CommonBanner";
import ProductDetailBanner from "public/Images/products/productDetails.jpg";
const ProductDetails = () => {
  return (
    <>
      <CommonBanner headerBanner={ProductDetailBanner} title={"DETAILS"} />
      <div className="m-3">
        <br />
        <h3><b>Product Name</b></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          corporis placeat accusantium reiciendis sint omnis aliquam dolores
          tempora minima, ad, quasi facere eius, velit excepturi consectetur
          deleniti asperiores nam nostrum impedit. Voluptates ratione dicta
          fugit, magnam facilis quaerat atque velit veniam explicabo magni
          labore non numquam asperiores illo accusamus nostrum! Maiores sunt
          tenetur similique illo dolor architecto beatae eaque eius sequi nam
          dolorum veritatis aut voluptates fugit, iusto ratione quas. Dicta,
          aliquid. Eligendi quaerat natus amet, pariatur consequatur explicabo
          recusandae. Voluptatem veritatis illo culpa atque cumque, dolorum
          ullam quis id quia ad excepturi, a dicta repudiandae eligendi beatae,
          velit libero.
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
