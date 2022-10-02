import React from "react";
import { useState } from "react";

const EconomicalBody = () => {
  const [num,setNum]=useState(0)
  
 

  const handleLudu=()=>{
    const ludu =Math.random()*6;
    setNum(Math.ceil(ludu))
  }

  return (
    <div className="m-3">
      <div>
        <br />
        <h1>ECONOMICAL</h1>
        <p>
          RONDHAN prioritizes its community while also sustaining long-term
          economic growth in a multitude of ways. We offer training and
          development opportunities to our RONDHAN staff while promoting innovation
          through operational optimization. We have been focusing on developing
          and employing local resources and at the same time we have been
          branding local resources to promote their service in the international
          market. Our focus on acquiring more international outsourcing services
          will enhance the inflow of remittance in Bangladesh.
        </p>
        <h4 className="mx-5">{num}</h4>
        <button onClick={handleLudu} className="prodButton mt-2">chess yourself</button>
      </div>
    </div>
  );
};

export default EconomicalBody;
