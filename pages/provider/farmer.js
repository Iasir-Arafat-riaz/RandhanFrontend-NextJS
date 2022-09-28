import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import FarmerDetails from "Components/OurProvider/FarmerDetails";
import CommonBanner from "Components/sustainability/CommonBanner";

const Farmer = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/provider/farmerBackgBanner.png`} title={"FARMER"}/>
    <FarmerDetails/>
    <BrandsServed/>
    </> );
}
 
export default Farmer;