import PartnersDetails from "Components/Contact/PartnersDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import beAPratnerBanner from "public/Images/resources/partners-banner.png"
const Partners = () => {
    return ( <>
    <CommonBanner headerBanner={beAPratnerBanner} title={"BE A PARTNER"}/>
    <PartnersDetails/>
    </> );
}
 
export default Partners;