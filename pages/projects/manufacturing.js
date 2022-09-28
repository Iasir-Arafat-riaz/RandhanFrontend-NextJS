import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import ManufacturingDetails from "Components/Projects/ManufacturingDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
 
const Manufacturing = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/projects/manufacturing.png`} title={"MANUFACTURING"}/>
    <ManufacturingDetails/>
    <BrandsServed/>
    </> );
}
 
export default Manufacturing;