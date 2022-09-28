import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EconomicalBody from "Components/sustainability/EconomicalBody";


const Economical = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/sustainability/economicalBanner.png`} title={"ECONOMICAL"}/>
    <EconomicalBody/>
    <BrandsServed />
    </> );
}
 
export default Economical;