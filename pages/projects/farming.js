import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FarmingDetails from "Components/Projects/FarmingDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Farming = () => {
  return (
    <>
      <CommonBanner headerBanner={`/Images/projects/farming.png`} title={"FARMING"}/>
      <FarmingDetails/>
      <BrandsServed/>
    </>
  );
};

export default Farming;
