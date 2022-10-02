
import ContactWithUs from "Components/Contact/ContactWithUs";
import Map from "Components/Contact/Map";
import SeoForAll from "Components/ForSeo/SeoForAll";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";

const Contact = () => {
  return (
    <>
      <SeoForAll title="Contact | Rondhan" />
      <CommonBanner headerBanner={"/Images/contact/contact-banner.png"} title={"CONTACT US"}/>
      <ContactWithUs />
      <BrandsServed />

      <Map />
    </>
  );
};
export default Contact;
