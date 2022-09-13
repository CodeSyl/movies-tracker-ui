import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Keyboard, Navigation } from "swiper";
import { styled } from "baseui";
import { ParagraphLarge, ParagraphMedium } from "baseui/typography";
import { Button } from "baseui/button";
import { ArrowLeft, ArrowRight } from "baseui/icon";
import { ProgressBar } from "baseui/progress-bar";
import Image from "next/image";

import { IMovieDetail } from "../types";
import { IMAGE_URL_W500 } from "../const";

const ArrowButton = styled(Button, {
  background: "#00000014",
  borderRadius: "12em",
  padding: "10px",
  color: "#ffffff73",
  fontSize: "6em",
  height: "10%",
  width: "5%",
});

function PosterSwiper({
  movies,
  title,
  progressBar,
}: {
  movies: IMovieDetail[];
  title: string;
  progressBar: boolean;
}) {
  const [swiper, setSwiper] = useState<any>();

  return (
    <div className="px-8">
      {movies.length && (
        <>
          <div

            style={{
              display:'flex',
              flexDirection:"row",
              justifyContent:"space-between",
              width: "100%",
            }}
          >
            <ArrowButton
              style={{
                transform: "translate(-96px, 195px)",
              }}
              onClick={() => {
                swiper.slidePrev();
              }}
              startEnhancer={() => <ArrowLeft size={24} />}
            />
            <ArrowButton
              onClick={() => {
                swiper.slideNext();
              }}
              style={{
                transform: "translate(96px, 195px)",
              }}
              startEnhancer={() => <ArrowRight size={24} />}
            />
          </div>
          <ParagraphLarge>{title}</ParagraphLarge>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Navigation, FreeMode]}
            onSwiper={(swiper) => setSwiper(swiper)}
            style={{ height: "400px" }}
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    position: "relative",
                    height: "70%",
                    width: "100%",
                  }}
                >
                  <Image
                    src={`${IMAGE_URL_W500}/${movie.poster_path}`}
                    layout="fill"
                    objectFit="contain"
                    alt={movie.overview}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    bottom: "0",
                    width: "100%",
                    height: "100px",
                  }}
                >
                  <ParagraphMedium>{movie.title}</ParagraphMedium>
                  {!progressBar ? (
                    <ParagraphMedium style={{ color: "#9b9b9b" }}>
                      {movie?.runtime}
                    </ParagraphMedium>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <ProgressBar
                        value={movie.vote_average * 10}
                        overrides={{
                          BarContainer: {
                            style: {
                              height: "6px",
                            },
                          },
                          BarProgress: {
                            style: () => ({
                              backgroundColor: "#3ebb58",
                            }),
                          },
                        }}
                      />
                      <span>{movie.vote_average * 10}%</span>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}

export default PosterSwiper;
