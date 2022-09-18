import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import EconomicalBody from "Components/sustainability/EconomicalBody";
import economicalBanner from "public/Images/sustainability/economicalBanner.png"

const Economical = () => {
    return ( <>
    <CommonBanner headerBanner={economicalBanner} title={"Economical"}/>
    <EconomicalBody/>
    <BrandsServed />
    </> );
}
 
export default Economical;