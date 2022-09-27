import RetailerContactForm from "Components/Contact/RetailerContactForm";
import CommonBanner from "Components/sustainability/CommonBanner";
import retailerBanner from "public/Images/contact/retailerContactBanner.png"
const Retailer = () => {
    return (  <>
    <CommonBanner headerBanner={retailerBanner} title={"PARTNER FOR RETAILER"}/>
    <RetailerContactForm/>
    </>);
}
 
export default Retailer;