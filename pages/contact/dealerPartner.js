import DealerContactForm from "Components/Contact/DealerContactForm";
import CommonBanner from "Components/sustainability/CommonBanner";

const Dealer = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/contact/dealerContactBanner.png`} title={"PARTNER FOR DEALER"}/>
    <DealerContactForm/>
    </> );
}
 
export default Dealer;