import React from "react";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SeoForAll from "Components/ForSeo/SeoForAll";
import ProductCards from "Components/Products/ProductCards";

import CommonBanner from "Components/sustainability/CommonBanner";

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
      .then((res) => console.log(res?.data));
  };

  return (
    <div>
      <SeoForAll title="Products | Rondhan" />
      <CommonBanner headerBanner={`/Images/products/products.png`} title={"PRODUCTS"} />
      <ProductCards />
      <BrandsServed />
      {/* <form className="p-5 bg-danger" onSubmit={handleSubmit}>
        <input onChange={inputData} type="text"></input>
        <input type="submit"></input>
      </form> */}
    </div>
  );
};

export default Products;
