import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import strategyBAnner from "public/Images/sustainability/strategy.jpg"
const Strategy = () => {
    return ( <>
    <CommonBanner headerBanner={strategyBAnner} title={"Sustainability-Strategy"}/>
    <BrandsServed />
    </> );
}
 
export default Strategy;