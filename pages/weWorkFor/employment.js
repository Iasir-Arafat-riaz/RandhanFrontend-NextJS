import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EmploymentDetails from "Components/WorkFor/EmploymentDetails";

const Employment = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/weWorkFor/employment.png`} title={"EMPLOYMENT CREATION"} />
    <EmploymentDetails/>
    <BrandsServed/>
    </> );
}
 
export default Employment;