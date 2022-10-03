import AboutHEader from "Components/About/AboutHEader";
import AboutMiddleBg from "Components/About/AboutMiddleBg";
import AlwaysWorking from "Components/About/AlwaysWorking";
import ExpertStaff from "Components/About/ExpertStaff";
import HomeOrBusiness from "Components/About/HomeOrBusiness";
import SeoForAll from "Components/ForSeo/SeoForAll";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import Counter from "Components/Home/Counter";
import Testimonial from "Components/Home/Testimonial";

const WhoWeAre = () => {
    return ( <>
    <SeoForAll title="About | Rondhan" />
    <AboutHEader />
      <AlwaysWorking />
      <Counter/>
      <AboutMiddleBg />
      <Testimonial />
      <BrandsServed />
      {/* <ExpertStaff /> */}
      
      <HomeOrBusiness />
    </> );
}
 
export default WhoWeAre;