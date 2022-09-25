import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import AgroTechDetails from "Components/WorkFor/AgroTechDetails";
import weWorkForBanner from "public/Images/weWorkFor/agrotechBanner.png"

const AgroTech = () => {
    return (<>
    <CommonBanner headerBanner={weWorkForBanner} title={"AGRO TECH"}/>
    <AgroTechDetails/>
    <BrandsServed/>
    
    </>  );
}
 
export default AgroTech;