import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import ManufacturingDetails from "Components/Projects/ManufacturingDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
 import manufecBanner from "/public/Images/projects/manufacturing.png"
const Manufacturing = () => {
    return ( <>
    <CommonBanner headerBanner={manufecBanner} title={"MANUFACTURING"}/>
    <ManufacturingDetails/>
    <BrandsServed/>
    </> );
}
 
export default Manufacturing;