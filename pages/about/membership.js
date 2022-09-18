import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import MembershipBanner from "public/Images/about/membershipBanner.png"

const Membership = () => {
    return ( <>
    <CommonBanner headerBanner={MembershipBanner} title={"MEMBERSHIP"}/>
    <BrandsServed/>
    </> );
}
 
export default Membership;