import CommonBanner from "Components/sustainability/CommonBanner";
import AboutMiddleBg from "../Components/About/AboutMiddleBg";
import AlwaysWorking from "../Components/About/AlwaysWorking";
import ExpertStaff from "../Components/About/ExpertStaff";
import HomeOrBusiness from "../Components/About/HomeOrBusiness";

import SeoForAll from "../Components/ForSeo/SeoForAll";
import BrandsServed from "../Components/Home/BrandsServed/BrandsServed";
import Testimonial from "../Components/Home/Testimonial";


function About() {
  const date = new Date();
  console.log("my date", date.getTime());

  return (
    <>
      <SeoForAll title="About | Rondhan" />
      <CommonBanner headerBanner={"/Images/backgroundImg/whoWeAreBanner.png"} title={"ABOUT RONDHAN"}/>
      <AlwaysWorking />
      <AboutMiddleBg />
      <Testimonial />
      <BrandsServed />
      <ExpertStaff />
      <HomeOrBusiness />
    </>
  );
}
export default About;
