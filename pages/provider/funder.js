import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FunderDetails from "Components/OurProvider/FunderDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Funder = () => {
  return (
    <>
      <CommonBanner headerBanner={`/Images/provider/funderBanner.png`} title={"FUNDER"} />
      <FunderDetails/>
      <BrandsServed />
    </>
  );
};

export default Funder;
