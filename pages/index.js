import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Components/Home/slider";
import FeatureOne from "../Components/Home/FeatureOne";
import LeadingManagement from "../Components/Home/LeadingManagement";
import Industries from "../Components/Home/Industries";
import WeDecided from "../Components/Home/WeDecided";
import Counter from "../Components/Home/Counter";
import Services from "../Components/Home/Services";
import HaveWaste from "../Components/Home/HaveWaste";
import Projects from "../Components/Home/Projects";
import Testimonial from "../Components/Home/Testimonial";
import LatestNews from "../Components/Home/LatestNews";
import BrandsServed from "../Components/Home/BrandsServed/BrandsServed";
import ServiceProvide from "../Components/Home/ServiceProvide";
import Test from "../Components/Test"; 




export default function Home() {
  return (
    <div >
    <Head>
      <title>Rondhan</title>
    </Head>
      <Slider/>
      <FeatureOne/>
      <LeadingManagement />
      <Industries/>
      <WeDecided/>
      <Counter/>
      {/* <Services/> */}
      <ServiceProvide/>
      <HaveWaste/>
      <Projects/>
      <BrandsServed/>
      <Testimonial/>
      {/* <Test/> */}
      {/* <LatestNews/> */}
    </div>
  );
}
