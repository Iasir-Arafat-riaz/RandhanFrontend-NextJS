import ContactHeader from "Components/Contact/ContactHeader";
import ContactWithUs from "Components/Contact/ContactWithUs";
import Map from "Components/Contact/Map";
import SeoForAll from "Components/ForSeo/SeoForAll";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";

const Contact = () => {
  return (
    <>
      <SeoForAll title="Contact | Rondhan" />
      <ContactHeader />
      <ContactWithUs />
      <BrandsServed />

      <Map />
    </>
  );
};
export default Contact;
