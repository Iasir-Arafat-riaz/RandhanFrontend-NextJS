import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import BuyerDetails from "Components/OurProvider/BuyerDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import buyerBanner from "public/Images/provider/buyerBanner.png";
const Buyer = () => {
  return (
    <>
      <CommonBanner headerBanner={buyerBanner} title={"BUYER"} />
      <BuyerDetails />
      <BrandsServed />
    </>
  );
};

export default Buyer;
