import ExpertStaff from "Components/About/ExpertStaff";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import OurClientBanner from "public/Images/about/ourteamBanner.png"

const OurTeam = () => {
    return ( <>
    
    <CommonBanner headerBanner={OurClientBanner} title={"OUR TEAM"}/>
      <ExpertStaff />
      <BrandsServed />
    </> );
}
 
export default OurTeam;<>

<h1>Our Team</h1>
</>