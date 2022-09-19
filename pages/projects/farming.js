import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FarmingDetails from "Components/Projects/FarmingDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import farmingBanner from "/public/Images/projects/farming.png";
const Farming = () => {
  return (
    <>
      <CommonBanner headerBanner={farmingBanner} title={"FARMING"}/>
      <FarmingDetails/>
      <BrandsServed/>
    </>
  );
};

export default Farming;
