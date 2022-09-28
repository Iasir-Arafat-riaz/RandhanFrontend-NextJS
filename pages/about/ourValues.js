import CultureDetails from "Components/About/CultureDetails";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";


const OurValues = () => {
    const testImg = "/Images/about/ourValues.png"
console.log(testImg);
    return ( <>
    <CommonBanner headerBanner={`/Images/about/ourValues.png`} title={"OUR VALUES"}/>
    <CultureDetails/>
    <BrandsServed/>
    </> );
}
 
export default OurValues;