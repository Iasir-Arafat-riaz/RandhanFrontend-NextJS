import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import BuyerDetails from "Components/OurProvider/BuyerDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Buyer = () => {
  return (
    <>
      <CommonBanner headerBanner={`/Images/provider/buyerBanner.png`} title={"BUYER"} />
      <BuyerDetails />
      <BrandsServed />
    </>
  );
};

export default Buyer;
