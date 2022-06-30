import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "./carousel.css";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const LogoCarousel = () => {
  return (
    <div className="logoCarousel">
      <span>They talk about it better than we do.</span>
      <h2>Plus de 150 clients font confiance à Findly. </h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //
        className="mySwiper"
        slidesPerView={4}
      >
        <SwiperSlide>
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="images/logo.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
