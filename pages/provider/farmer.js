import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FarmerDetails from "Components/OurProvider/FarmerDetails";
import CommonBanner from "Components/sustainability/CommonBanner";
import farmerBanner from "public/Images/provider/farmerBackgBanner.png"
const Farmer = () => {
    return ( <>
    <CommonBanner headerBanner={farmerBanner} title={"FARMER"}/>
    <FarmerDetails/>
    <BrandsServed/>
    </> );
}
 
export default Farmer;