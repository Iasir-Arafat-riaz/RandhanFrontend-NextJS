import React, { useRef } from "react";

const Test = () => {
  const videoRef = useRef();

  return (
    <div style={{ position: "relative" }}>
      <div className="videoContent">
        <h1>video content</h1>
      </div>
    </div>
  );
};

export default Test;
