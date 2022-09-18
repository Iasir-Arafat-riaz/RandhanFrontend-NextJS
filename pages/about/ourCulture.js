import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import CultureBanner from "public/Images/about/culture.png"

const OurCulture = () => {
    return ( <>
    <CommonBanner headerBanner={CultureBanner} title={"OUR CULTURE"}/>
    <BrandsServed/>
    </> );
}
 
export default OurCulture;