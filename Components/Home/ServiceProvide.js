import Image from "next/image";
import React from "react";
import serviceProvBg from "/public/Images/backgroundImg/serviceProvBg.jpeg"
import serviceImgCom from "../../styles/images/services/service-details-img-4.jpg";
import serviceImg1 from "../../styles/images/services/services-1-1.jpg";
import serviceImg2 from "../../styles/images/services/services-1-2.jpg";
import serviceImg3 from "../../styles/images/services/services-1-3.jpg";
import serviceImg4 from "../../styles/images/services/services-1-4.jpg";
import { GiSwapBag } from "react-icons/gi";
import { FaDumpster } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { GiWaterRecycling } from "react-icons/gi";
import { Card, Button } from "react-bootstrap";
import { GiFarmer } from 'react-icons/gi';
import { IoIosMan } from 'react-icons/io';
import { BsBank2 } from 'react-icons/bs';
import { FcBusinessman } from 'react-icons/fc';

import farmer from "../../public/Images/service/farmer.png";
import buyer from "../../public/Images/service/buyer.png";
import funder from "../../public/Images/service/funders.png";
import retailer from "../../public/Images/service/retailer.png";

const ServiceProvide = () => {
  return (
    <section className="services-one">
      <div >
        <div className="services-one__top">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="services-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">WE OFFER</span>
                  {/* <h2 className="section-title__title">
                    The Services We’re Providing  to Our Customers
                  </h2> */}
                  <p className="services-one__top-text">
                    RONDHAN is a technology company that enables small-scale
                    farmers and Agri Businesses to maximize their profit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="services-one__top-right">
                {/* <p className="services-one__top-text">
                  RONDHAN is a technology company that enables small-scale
                  farmers and Agri Businesses to maximize their profit.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="services-one__bottom" style={{
            backgroundImage: `url(${serviceProvBg.src})`,
            backgroundAttachment: "fixed",
          }}>
          <div className="row">
            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 mt-2 ">
              <Card className="shadow serviceInnerContent pt-4">
                <div className="serviceProvIcon">
                  <span><GiFarmer size={50}/></span>{/* <Image src={farmer} alt="image"></Image> */}
                </div>
                <Card.Body>
                  <h4 className="text-center serviceName">
                    <b>FARMER</b>
                  </h4>
                  <Card.Text className="text-center serviceProvDetail">
                    We bundle everything a farmer needs to maximize profit:
                    financing, farm inputs and advisory, insurance, and access
                    to market. so chill always.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 mt-2">
              {" "}
              <Card className="shadow serviceInnerContent pt-4 ">
              <div className="serviceProvIcon">
                  <span><IoIosMan size={50}/></span>
                </div>
                <Card.Body>
                  <h4 className="text-center serviceName">
                    <b>BUYER</b>
                  </h4>
                  <Card.Text className="text-center serviceProvDetail">
                    We source directly from the farmers and supply agriculture
                    produce in bulk quantity to large enterprises, modern trade
                    retailers
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 mt-2">
              {" "}
              <Card className="shadow serviceInnerContent pt-4">
              <div className="serviceProvIcon">
                  <span><BsBank2 size={50}/></span>
                </div>
                <Card.Body>
                  <h4 className="text-center serviceName">
                    <b>FUNDER</b>
                  </h4>
                  <Card.Text className="text-center serviceProvDetail">
                    We use technology and data to enable institutions and
                    individuals to support in creating access to finance for the
                    farmers have huge goods
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-xl-3 col-lg-3 col-sm-12 mt-2">
              {" "}
              <Card className="shadow serviceInnerContent pt-4 ">
              <div className="serviceProvIcon">
                  <span><FcBusinessman size={50}/></span>
                </div>
                <Card.Body>
                  <h4 className="text-center serviceName">
                    <b>RETAILER</b>
                  </h4>
                  <Card.Text className="text-center serviceProvDetail">
                    We work with agricultural input companies and service
                    providers, offering quality agriculture input and advisory
                    services to the farmers
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvide;
