import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CattleDetails from "Components/Projects/CattleDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import cattleBAnner from "/public/Images/projects/cattle.png"

const Cattle = () => {
    return (  <>
    
    <CommonBanner headerBanner={cattleBAnner} title="CATTLE"/>
    <CattleDetails/>
    <BrandsServed/>
    </>);
}
 
export default Cattle;