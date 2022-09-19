import Image from "next/image";
import React from "react";

const MembershipDetail = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5 text-center">
          <b>MEMBERSHIP AND ACCREDITATION</b>
        </h2>
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <Image src="/Images/about/member1.png" width={250} height={100} />
          </div>
          <div className="col-md-4">
            <Image src="/Images/about/member2.png" width={250} height={100} />
          </div>
          <div className="col-md-4">
            <Image src="/Images/about/member3.png" width={250} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipDetail;
