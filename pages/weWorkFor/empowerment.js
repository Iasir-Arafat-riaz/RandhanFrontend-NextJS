import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EmpowermentDetails from "Components/WorkFor/EmpowermentDetails";


const Empowerment = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/weWorkFor/empowermentBanner.png`} title={"EMPOWERED FARMERS"}/>
    <EmpowermentDetails/>
    <BrandsServed/>
    </> );
}
 
export default Empowerment;