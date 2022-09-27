import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Product from "./Product";



const ProductCards = () => {
  const allProduct=[{id:1,name:"Rice",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/rawRice.jpg`},
  {id:2,name:"Pilau rice",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:"/Images/products/pulao.jpg"},
  {id:3,name:"Turmeric",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:"/Images/products/Turmeric.jpg"},
  {id:4,name:"Chilli",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/Chilli.jpg`},
  {id:5,name:"Cumin",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/Cumin.jpg`},
  {id:6,name:"Coriander",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/Coriander.jpg`},
  {id:7,name:"Mustard Oil",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/MustardOil.jpg`},
  {id:8,name:"Clarified butter",details:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",photo:`/Images/products/ClarifiedButter.jpg`}
]
console.log(allProduct);
  return (
    <div className="p-3">
      <Row xs={1} md={4} className="g-4 p-2">
        {allProduct.map((prod, idx) => (
          <Product key={idx} {...prod}/>
        ))}
      </Row>
    </div>
  );
};

export default ProductCards;
