import AboutMiddleBg from "../Components/About/AboutMiddleBg";
import AlwaysWorking from "../Components/About/AlwaysWorking";
import ExpertStaff from "../Components/About/ExpertStaff";
import HomeOrBusiness from "../Components/About/HomeOrBusiness";
import WhyChossUs from "../Components/About/WhyChossUs";
import SeoForAll from "../Components/ForSeo/SeoForAll";
import BrandsServed from "../Components/Home/BrandsServed/BrandsServed";
import Testimonial from "../Components/Home/Testimonial";
import AboutHEader from "./../Components/About/AboutHEader";

function About() {
  const date = new Date();
  console.log("my date", date.getTime());

  return (
    <>
      <SeoForAll title="About | Rondhan" />
      <AboutHEader />
      <AlwaysWorking />
      <AboutMiddleBg />
      <Testimonial />
      <BrandsServed />
      <ExpertStaff />
      {/* <WhyChossUs/> */}
      <HomeOrBusiness />
    </>
  );
}
export default About;
