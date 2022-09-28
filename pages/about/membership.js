import MembershipDetail from "Components/About/MembershipDetail";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";


const Membership = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/about/membershipBanner.png`} title={"MEMBERSHIP"}/>
    <MembershipDetail/>
    <BrandsServed/>
    </> );
}
 
export default Membership;