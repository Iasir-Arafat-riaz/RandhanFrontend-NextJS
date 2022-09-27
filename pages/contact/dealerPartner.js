import DealerContactForm from "Components/Contact/DealerContactForm";
import CommonBanner from "Components/sustainability/CommonBanner";
import DealerBanner from "public/Images/contact/dealerContactBanner.png"
const Dealer = () => {
    return ( <>
    <CommonBanner headerBanner={DealerBanner} title={"PARTNER FOR DEALER"}/>
    <DealerContactForm/>
    </> );
}
 
export default Dealer;