import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import CsrActivitiesBody from "Components/sustainability/CsrActivitiesBody";
import csrActivitiesBackg from "public/Images/sustainability/csrActivities.png"
const CsrActivities = () => {

    return ( <>
    <CommonBanner headerBanner={csrActivitiesBackg} title={"CSR ACTIVITIES"}/>
    <CsrActivitiesBody/>
    <BrandsServed/>
    </> );
}
 
export default CsrActivities;