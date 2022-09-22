import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EnvironmentalBody from "Components/sustainability/EnvironmentalBody";
import environmentalBanner from "public/Images/sustainability/environmental-banner.png";
const Environmental = () => {
  return (
    <>
      <CommonBanner
        headerBanner={environmentalBanner}
        title={"ENVIRONMENTAL"}
      />
      <EnvironmentalBody/>
      <BrandsServed />
    </>
  );
};

export default Environmental;
