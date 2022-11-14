import SeoForAll from "Components/ForSeo/SeoForAll";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import ManufacturingDetails from "Components/Projects/ManufacturingDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
 
const Manufacturing = () => {
    return ( <>
    <SeoForAll title='Projects'/>
    <CommonBanner headerBanner={`/Images/projects/manufacturing.png`} title={"MANUFACTURING"}/>
    <ManufacturingDetails/>
    <BrandsServed/>
    </> );
}
 
export default Manufacturing;