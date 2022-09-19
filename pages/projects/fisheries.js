import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FisheriesDetails from "Components/Projects/FisheriesDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import fisheries from "/public/Images/projects/fisheries-.png";
const Fisheries = () => {
  return (
    <>
      <CommonBanner headerBanner={fisheries} title={"FISHERIES"} />
      <FisheriesDetails />
      <BrandsServed />
    </>
  );
};

export default Fisheries;
