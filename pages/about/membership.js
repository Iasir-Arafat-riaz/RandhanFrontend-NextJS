import MembershipDetail from "Components/About/MembershipDetail";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import MembershipBanner from "public/Images/about/membershipBanner.png"

const Membership = () => {
    return ( <>
    <CommonBanner headerBanner={MembershipBanner} title={"MEMBERSHIP"}/>
    <MembershipDetail/>
    <BrandsServed/>
    </> );
}
 
export default Membership;