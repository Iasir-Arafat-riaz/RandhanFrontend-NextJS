import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CattleDetails from "Components/Projects/CattleDetails";
import CommonBanner from "Components/sustainability/CommonBanner";


const Cattle = () => {
    return (  <>
    
    <CommonBanner headerBanner={`/Images/projects/cattle.png`} title="CATTLE"/>
    <CattleDetails/>
    <BrandsServed/>
    </>);
}
 
export default Cattle;