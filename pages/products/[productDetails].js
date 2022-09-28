import CommonBanner from "Components/sustainability/CommonBanner";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductDetailBanner from "public/Images/products/prodDetails.png";


//statically create array
const allProduct=[{id:1,name:"Rice",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/rawRice.jpg`},
  {id:2,name:"Pilau rice",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:"/Images/products/pulao.jpg"},
  {id:3,name:"Turmeric",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:"/Images/products/Turmeric.jpg"},
  {id:4,name:"Chilli",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/Chilli.jpg`},
  {id:5,name:"Cumin",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/Cumin.jpg`},
  {id:6,name:"Coriander",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/Coriander.jpg`},
  {id:7,name:"Mustard Oil",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/MustardOil.jpg`},
  {id:8,name:"Clarified butter",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/ClarifiedButter.jpg`}
]


const ProductDetails = () => {
  const router = useRouter().query.productDetails;
  const singleProd = allProduct.find(prod=>prod.id==router);

  
  
  
  return (
    <>
      <CommonBanner headerBanner={singleProd?.photo} title={singleProd?.name} />
      <div className="m-3">
        <br />
        <h3><b>{singleProd?.name}</b></h3>
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
        <Image src={singleProd?.photo} width={150} height={150} alt="image"/>
      </div>
    </>
  );
};

export default ProductDetails;
