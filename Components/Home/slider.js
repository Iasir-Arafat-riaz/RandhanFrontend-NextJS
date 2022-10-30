import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

//import images from existing folder
import first from "public/Images/backgroundImg/sliderBackgOne.png";
import second from "public/Images/backgroundImg/nokshiKathaTwo.png";
import third from "public/Images/backgroundImg/sliderBackgThree.png";
import fourth from "public/Images/backgroundImg/sliderBackgFour.png";
import fifth from "public/Images/backgroundImg/sliderBackgFive.png";
import sixth from "public/Images/backgroundImg/sliderBackgSix.png";
import seventh from "public/Images/backgroundImg/sliderBackg6.png";

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
          <Image src={first} alt="image" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Image src={second} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={third} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fourth} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fifth} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sixth} alt="image" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src={seventh} alt="image"/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
export default Slider;
