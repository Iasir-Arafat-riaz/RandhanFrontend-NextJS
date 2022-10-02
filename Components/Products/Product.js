import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Product = ({ name, photo, id }) => {
  const router = useRouter();
  return (
    <div>
      <Col>
      
        <Card>
          {/* <Card.Img variant="top" src="/Images/products/singProd.jpg" /> */}
          <Image
            src={photo}
            alt="Picture of the author"
            width={200}
            height={180}
          />
          <Card.Body>
            <Card.Title className="text-center">
              <b>{name}</b>
            </Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <button
            onClick={() => router.push(`/products/${id}`)}
            className="prodButton"
          >
            Details
          </button>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
