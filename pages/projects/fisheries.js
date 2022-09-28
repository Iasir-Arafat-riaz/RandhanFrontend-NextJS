import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FisheriesDetails from "Components/Projects/FisheriesDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Fisheries = () => {
  return (
    <>
      <CommonBanner headerBanner={`/Images/projects/fisheries.png`} title={"FISHERIES"} />
      <FisheriesDetails />
      <BrandsServed />
    </>
  );
};

export default Fisheries;
