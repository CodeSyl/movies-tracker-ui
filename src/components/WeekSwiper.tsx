import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function WeekSwiper() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      style={{ height: "400px", margin: 0 }}
    >
      <SwiperSlide className="px-8">
        <h1>2Z2Z</h1>
      </SwiperSlide>
      <SwiperSlide className="px-8">
        <h1>2Z2Z</h1>
      </SwiperSlide>
    </Swiper>
  );
}

export default WeekSwiper;
