import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import RetailerDetails from "Components/OurProvider/RetailerDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Retailer = () => {
  return (
    <>
      <CommonBanner headerBanner={`/Images/provider/retailerBanner.png`} title={"RETAILER"} />
      <RetailerDetails />
      <BrandsServed />
    </>
  );
};

export default Retailer;
