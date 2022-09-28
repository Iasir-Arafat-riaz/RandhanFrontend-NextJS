import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import ConsumerDetails from "Components/WorkFor/ConsumerDetails";


const Consumer = () => {
  return (
    <>
    <CommonBanner headerBanner={`/Images/weWorkFor/consumerBanner.png`} title={"CONSUMER"} />
      <ConsumerDetails/>
      <BrandsServed />
    </>
  );
};

export default Consumer;
