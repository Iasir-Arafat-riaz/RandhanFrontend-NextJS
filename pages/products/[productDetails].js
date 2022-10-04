import SingleProductDetails from "Components/Products/SingleProductDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import { useRouter } from "next/router";

//statically create array
const allProduct = [
  {
    id: 1,
    name: "RICE",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: `/Images/products/rawRice.jpg`,
  },
  {
    id: 2,
    name: "PILAU RICE",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: "/Images/products/pulao.jpg",
  },
  {
    id: 3,
    name: "TUMERIC",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: "/Images/products/Turmeric.jpg",
  },
  {
    id: 4,
    name: "CHILLI",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: `/Images/products/Chilli.jpg`,
  },
  {
    id: 5,
    name: "CUMIN",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: `/Images/products/Cumin.jpg`,
  },
  {
    id: 6,
    name: "CORIANDER",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: `/Images/products/Coriander.jpg`,
  },
  {
    id: 7,
    name: "MUSTARD OIL",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: `/Images/products/sorisha.jpg`,
  },
  {
    id: 8,
    name: "CLARIFIED BUTTER",
    details:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    photo: `/Images/products/ClarifiedButter.jpg`,
  },
];

const ProductDetails = () => {
  const router = useRouter().query.productDetails;
  const singleProd = allProduct.find((prod) => prod.id == router);

  return (
    <>
      <CommonBanner headerBanner={singleProd?.photo} title={singleProd?.name} />
      <SingleProductDetails singleProd={singleProd} />
    </>
  );
};

export default ProductDetails;
