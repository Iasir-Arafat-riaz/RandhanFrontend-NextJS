import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FunderDetails from "Components/OurProvider/FunderDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import funderBanner from "public/Images/provider/funderBanner.png";
const Funder = () => {
  return (
    <>
      <CommonBanner headerBanner={funderBanner} title={"FUNDER"} />
      <FunderDetails/>
      <BrandsServed />
    </>
  );
};

export default Funder;
