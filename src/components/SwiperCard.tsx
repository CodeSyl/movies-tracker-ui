import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IMovieDetail } from "../types";
import { IMAGE_URL } from "../const";
import Image from "next/image";
import { Button } from "baseui/button";
import { Card, StyledAction, StyledThumbnail } from "baseui/card";
import { StyledBody } from "baseui/toast";

const SwiperCard = ({ movies }: { movies: IMovieDetail[] }) => {
  console.log(
    "🚀 ~ file: SwiperCard.tsx ~ line 14 ~ SwiperCard ~ movies",
    movies
  );
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Scrollbar]}
      className="mySwiper"
      style={{ background: "red", height: "400px" }}
    >
      <SwiperSlide>
        {/* <div style={{ width: "90%" }}>
          <Image
            alt="tt"
            src={`${IMAGE_URL}/${movies[1]?.backdrop_path}`}
            layout="fill"
            objectFit="none"
          />
        </div> */}
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCard;
