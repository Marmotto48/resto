import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./carousel.css";
const QuotesCarousel = () => {
  return (
    <div className="carousel">
      <span>Testimonials</span>
      <h2>What they say about us</h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="icon">
              <i className="fa fa-quote-right"></i>
            </div>
            <p>
              "Ut elementum a elit sed tristique. Pellentesque sed semper erat.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."
            </p>
            <h4>William Smith</h4>
            <span>New Co-Founder</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="icon">
              <i className="fa fa-quote-right"></i>
            </div>
            <p>
              "Ut elementum a elit sed tristique. Pellentesque sed semper erat.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."
            </p>
            <h4>William Smith</h4>
            <span>New Co-Founder</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <div className="icon">
              <i className="fa fa-quote-right"></i>
            </div>
            <p>
              "Ut elementum a elit sed tristique. Pellentesque sed semper erat.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."
            </p>
            <h4>William Smith</h4>
            <span>New Co-Founder</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default QuotesCarousel;
