import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EmpowermentDetails from "Components/WorkFor/EmpowermentDetails";


const Empowerment = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/weWorkFor/empowermentBanner.png`} title={"EMPOWERMENT"}/>
    <EmpowermentDetails/>
    <BrandsServed/>
    </> );
}
 
export default Empowerment;