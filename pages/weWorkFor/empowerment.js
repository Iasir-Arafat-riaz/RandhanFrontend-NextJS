import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EmpowermentDetails from "Components/WorkFor/EmpowermentDetails";
import empowermentBanner from "public/Images/weWorkFor/empowermentBanner.png"

const Empowerment = () => {
    return ( <>
    <CommonBanner headerBanner={empowermentBanner} title={"EMPOWERMENT"}/>
    <EmpowermentDetails/>
    <BrandsServed/>
    </> );
}
 
export default Empowerment;