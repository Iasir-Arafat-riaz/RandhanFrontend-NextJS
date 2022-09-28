import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EnvironmentalBody from "Components/sustainability/EnvironmentalBody";

const Environmental = () => {
  return (
    <>
      <CommonBanner
        headerBanner={`/Images/sustainability/environmental-banner.png`}
        title={"ENVIRONMENTAL"}
      />
      <EnvironmentalBody/>
      <BrandsServed />
    </>
  );
};

export default Environmental;
