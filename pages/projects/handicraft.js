import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import HandicraftDetails from "Components/Projects/HandicraftDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Handicraft = () => {
  return (
    <>
      <CommonBanner headerBanner={`/Images/projects/handicraftProject1.png`} title={"HANDICRAFT"} />
      <HandicraftDetails />
      <BrandsServed />
    </>
  );
};

export default Handicraft;
