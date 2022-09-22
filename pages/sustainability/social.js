import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import SocialBody from "Components/sustainability/SocialBody";
import socialBAnner from "public/Images/sustainability/social-banner.png"
const Social = () => {
    return (<>
   <CommonBanner headerBanner={socialBAnner} title={"SOCIAL"}/>
   <SocialBody/>
    <BrandsServed />
    </>  );
}
 
export default Social;