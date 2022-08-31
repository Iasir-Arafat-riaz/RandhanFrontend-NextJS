import AboutMiddleBg from "../Components/About/AboutMiddleBg";
import AlwaysWorking from "../Components/About/AlwaysWorking";
import ExpertStaff from "../Components/About/ExpertStaff";
import HomeOrBusiness from "../Components/About/HomeOrBusiness";
import WhyChossUs from "../Components/About/WhyChossUs";
import BrandsServed from "../Components/Home/BrandsServed/BrandsServed";
import Testimonial from "../Components/Home/Testimonial";
import AboutHEader from "./../Components/About/AboutHEader";

function About() {
  return (
    <>
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
