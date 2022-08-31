import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

//import images from existing folder
import first from"../../styles/images/background/main-slider-1-1.jpg"
import second from "../../styles/images/background/main-slider-1-2.jpg"
import third from"../../styles/images/background/main-slider-1-3.jpg"
import fourth from"../../styles/images/background/main-slider-2-1.jpg"
import fifth from"../../styles/images/background/main-slider-2-2.jpg"
import sixth from"../../styles/images/background/main-slider-2-3.jpg"

function Slider(){
  console.log(first);

    return <>
     <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiperCustom"
        // slidesPerView={3}
        >
        {/* https://i.ibb.co/wy6wQr4/main-slider-1-1.jpg */}
        {/* <SwiperSlide ><div style={{backgroundImage:"url(https://i.ibb.co/wy6wQr4/main-slider-1-1.jpg)"}}></div></SwiperSlide> */}
        <SwiperSlide > <Image src={first}/> </SwiperSlide>
        <SwiperSlide><Image src={second}/></SwiperSlide>
        <SwiperSlide><Image src={third}/></SwiperSlide>
        <SwiperSlide><Image src={fourth}/></SwiperSlide>
        <SwiperSlide><Image src={fifth}/></SwiperSlide>
        <SwiperSlide><Image src={sixth}/></SwiperSlide>
      </Swiper>
    </>
}
export default Slider; 