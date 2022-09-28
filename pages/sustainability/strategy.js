import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import StrategyBody from "Components/sustainability/StrategyBody";

const Strategy = () => {
    return ( <>
    <CommonBanner headerBanner={`/Images/sustainability/strategy.jpg`} title={"Sustainability-Strategy"}/>
    <StrategyBody/>
    <BrandsServed />
    </> );
}
 
export default Strategy;