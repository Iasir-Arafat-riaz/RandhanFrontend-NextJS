import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import AgroTechDetails from "Components/WorkFor/AgroTechDetails";


const AgroTech = () => {
    return (<>
    <CommonBanner headerBanner={`/Images/weWorkFor/agrotechBanner.png`} title={"AGRO TECH"}/>
    <AgroTechDetails/>
    <BrandsServed/>
    
    </>  );
}
 
export default AgroTech;