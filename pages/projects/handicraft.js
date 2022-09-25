import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import HandicraftDetails from "Components/Projects/HandicraftDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import handicraftBanner from "public/Images/projects/handicraftProject1.png";
const Handicraft = () => {
  return (
    <>
      <CommonBanner headerBanner={handicraftBanner} title={"HANDICRAFT"} />
      <HandicraftDetails />
      <BrandsServed />
    </>
  );
};

export default Handicraft;
