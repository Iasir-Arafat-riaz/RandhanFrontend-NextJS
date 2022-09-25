import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import RetailerDetails from "Components/OurProvider/RetailerDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import retailerBanner from "public/Images/provider/retailerBanner.png";
const Retailer = () => {
  return (
    <>
      <CommonBanner headerBanner={retailerBanner} title={"RETAILER"} />
      <RetailerDetails />
      <BrandsServed />
    </>
  );
};

export default Retailer;
