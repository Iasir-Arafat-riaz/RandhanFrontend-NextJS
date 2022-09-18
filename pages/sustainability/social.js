import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import socialBAnner from "public/Images/sustainability/social-banner.png"
const Social = () => {
    return (<>
   <CommonBanner headerBanner={socialBAnner} title={"Social"}/>
    <BrandsServed />
    </>  );
}
 
export default Social;