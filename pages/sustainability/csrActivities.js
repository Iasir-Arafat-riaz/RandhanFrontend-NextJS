import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import CsrActivitiesBody from "Components/sustainability/CsrActivitiesBody";

const CsrActivities = () => {

    return ( <>
    <CommonBanner headerBanner={`/Images/sustainability/csrActivities.png`} title={"CSR ACTIVITIES"}/>
    <CsrActivitiesBody/>
    <BrandsServed/>
    </> );
}
 
export default CsrActivities;