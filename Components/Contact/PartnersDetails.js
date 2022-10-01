import Image from "next/image";
import React from "react";
import retailerImage from "public/Images/contact/retailer.jpg";
import dealerImage from "public/Images/contact/dealer.png";
import Link from "next/link";

const PartnersDetails = () => {
  return (
    <div style={{margin:"100px 50px"}}>
      <div className="row">
        <div className="col-xl-6 text-center">
          <div className="retailerDiv">
            <Image width={400} height={250} src={retailerImage} />
            <div className="mt-3">
              <Link href="/contact/retailerPartner"><a><button className="partnerBtn">RETAILER</button></a></Link>
            </div>
          </div>
        </div>
        <div className="col-xl-6 text-center">
          <div className="retailerDiv">
            <Image width={400} height={250} src={dealerImage} />
            <div className="mt-3">
            <Link href="/contact/dealerPartner"><a><button className="partnerBtn">DEALER</button></a></Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PartnersDetails;
