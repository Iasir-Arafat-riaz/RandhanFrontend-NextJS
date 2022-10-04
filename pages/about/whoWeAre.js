
import AboutMiddleBg from "Components/About/AboutMiddleBg";
import AlwaysWorking from "Components/About/AlwaysWorking";
import ExpertStaff from "Components/About/ExpertStaff";
import HomeOrBusiness from "Components/About/HomeOrBusiness";
import SeoForAll from "Components/ForSeo/SeoForAll";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import Counter from "Components/Home/Counter";
import Testimonial from "Components/Home/Testimonial";
import CommonBanner from "Components/sustainability/CommonBanner";

const WhoWeAre = () => {
    return ( <>
    <SeoForAll title="About | Rondhan" />
    <CommonBanner headerBanner={"/Images/backgroundImg/whoWeAreBanner.png"} title="WHO WE ARE"/>
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