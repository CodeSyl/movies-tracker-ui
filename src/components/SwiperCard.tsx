import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";

const SwiperCard = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <MovieCard></MovieCard>
      </SwiperSlide>
      <SwiperSlide>
        <MovieCard></MovieCard>
      </SwiperSlide>
      <SwiperSlide>
        <MovieCard></MovieCard>
      </SwiperSlide>
      <SwiperSlide>
        <MovieCard></MovieCard>
      </SwiperSlide>
      <SwiperSlide>
        <MovieCard></MovieCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCard;
