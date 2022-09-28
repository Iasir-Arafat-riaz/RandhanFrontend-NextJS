import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import SocialBody from "Components/sustainability/SocialBody";

const Social = () => {
    return (<>
   <CommonBanner headerBanner={`/Images/sustainability/social-banner.png`} title={"SOCIAL"}/>
   <SocialBody/>
    <BrandsServed />
    </>  );
}
 
export default Social;