import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import environmentalBanner from "public/Images/sustainability/environmental-banner.png";
const Environmental = () => {
  return (
    <>
      <CommonBanner
        headerBanner={environmentalBanner}
        title={"Environmental"}
      />
      <BrandsServed />
    </>
  );
};

export default Environmental;
