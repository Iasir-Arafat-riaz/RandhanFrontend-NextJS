import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

//import images from existing folder
import first from "public/Images/backgroundImg/sliderBackg0.png";
import second from "public/Images/backgroundImg/sliderBackg2.png";
import third from "public/Images/backgroundImg/sliderBackg3.png";
import fourth from "public/Images/backgroundImg/sliderBackg4.png";
import fifth from "public/Images/backgroundImg/sliderBackg5.png";
import sixth from "public/Images/backgroundImg/sliderBackg6.png";

function Slider() {
  console.log(first);

  return (
    <>
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
        className="mySwiper "
        // slidesPerView={3}
      >
        {/* https://i.ibb.co/wy6wQr4/main-slider-1-1.jpg */}
        {/* <SwiperSlide ><div style={{backgroundImage:"url(https://i.ibb.co/wy6wQr4/main-slider-1-1.jpg)"}}></div></SwiperSlide> */}
        <SwiperSlide className="swiperCustom">
          {" "}
          <Image src={first} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image src={second} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={third} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fourth} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fifth} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sixth} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
