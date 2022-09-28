import RetailerContactForm from "Components/Contact/RetailerContactForm";
import CommonBanner from "Components/sustainability/CommonBanner";

const Retailer = () => {
    return (  <>
    <CommonBanner headerBanner={`/Images/contact/retailerContactBanner.png`} title={"PARTNER FOR RETAILER"}/>
    <RetailerContactForm/>
    </>);
}
 
export default Retailer;