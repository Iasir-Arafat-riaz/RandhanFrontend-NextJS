import React from "react";
import BrandsServed from "../Components/Home/BrandsServed/BrandsServed";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  
  const [value, setValue] = useState("");

  const inputData = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: `${value}` };
    axios
      .post("http://localhost:5000/postData", data)
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <BrandsServed />
      <form className="p-5 bg-danger" onSubmit={handleSubmit}>
        <input onChange={inputData} type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Products;



