import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Product from "./Product";


const ProductCards = () => {
  return (
    <div className="p-3">
      <Row xs={1} md={4} className="g-4 p-2">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Product key={idx}/>
        ))}
      </Row>
    </div>
  );
};

export default ProductCards;
