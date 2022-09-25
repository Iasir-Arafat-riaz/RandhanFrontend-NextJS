import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import ConsumerDetails from "Components/WorkFor/ConsumerDetails";
import consumerBanner from "public/Images/weWorkFor/consumerBanner.png"

const Consumer = () => {
  return (
    <>
    <CommonBanner headerBanner={consumerBanner} title={"CONSUMER"} />
      <ConsumerDetails/>
      <BrandsServed />
    </>
  );
};

export default Consumer;
