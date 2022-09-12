import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { HeadingLarge } from "baseui/typography";
import { Button, SIZE } from "baseui/button";
import { useStyletron } from "baseui";

import { IMovieDetail } from "../types";
import { IMAGE_URL } from "../const";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeaderSwiper = ({
  movies,
  setBackGroundImage,
}: {
  movies: IMovieDetail[];
  setBackGroundImage: Function;
}) => {
  const [css, theme] = useStyletron();

  const spaceHeader = css({ marginBottom: theme.sizing.scale700 });
  const space = css({ marginLeft: theme.sizing.scale300 });

  if (!movies.length) return <h1>axait</h1>;

  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Scrollbar]}
      style={{ height: "400px", margin: 0 }}
      onSlideChange={(props) => {
        setBackGroundImage(props.realIndex);
      }}
      keyboard={{
        enabled: true,
      }}
    >
      {movies.slice(0, 3).map((movie, index) => (
        <SwiperSlide className="px-8" key={index}>
          <div
            className={`bg-center w-100 h-full bg-no-repeat`}
            style={{
              borderRadius: "1rem",
              backgroundSize: "cover",
              backgroundImage: `url(${IMAGE_URL}/${movie?.backdrop_path})`,
            }}
          >
            <div
              style={{
                width: "30%",
                height: "20px",
                position: "absolute",
                left: "4em",
                bottom: "7em",
              }}
            >
              <HeadingLarge>{movie.title}</HeadingLarge>
              <div className={spaceHeader}></div>
              <Button
                size={SIZE.compact}
                style={{ backgroundColor: "white", color: "black" }}
              >
                Regarder
              </Button>
              <span className={space} />

              <Button
                size={SIZE.compact}
                style={{
                  color: "white",
                  boxShadow: "0px 0px 0px 2px white inset",
                  backgroundColor: "transparent",
                }}
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSwiper;
