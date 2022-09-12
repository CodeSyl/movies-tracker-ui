import { GetServerSideProps } from "next";
import HeaderSwiper from "../components/HeaderSiwper";
import { BackGroundBlurImage } from "../components/BackGroundBlurImage";

import { IMovieDetail } from "../types";
import {
  API_KEY,
  BASE_MOVIE,
  TOP_RATED_MOVIE,
  TRENDING_MOVIES_URL,
} from "../const";
import { useEffect, useState } from "react";
import PosterSwiper from "../components/PosterSwiper";
import { toHoursAndMinutes } from "../util";

const Home = ({
  movies,
  topRated,
}: {
  movies: IMovieDetail[];
  topRated: IMovieDetail[];
}) => {
  const [bgImage, setBgImage] = useState<string>("");

  const setBackGroundImage = (index: number) => {
    setBgImage(movies[index].backdrop_path);
  };

  useEffect(() => {
    if (movies.length) setBgImage(movies[0].backdrop_path);
  }, [movies]);

  if (!movies.length || !topRated.length) return <h1>await</h1>;

  return (
    <>
      {bgImage.length > 0 && <BackGroundBlurImage image={bgImage} />}
      <HeaderSwiper movies={movies} setBackGroundImage={setBackGroundImage} />
      <div className="my-5"></div>
      <PosterSwiper
        movies={movies}
        title={"A l'affiche cette semaine"}
        progressBar={false}
      />
      <PosterSwiper
        movies={topRated}
        title={"Les films les mieux notés"}
        progressBar={true}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(TRENDING_MOVIES_URL);
  const data = await res.json();

  const topRatedResponse = await fetch(TOP_RATED_MOVIE);
  const topRatedMovies = await topRatedResponse.json();

  const moviesWithRuntime = await Promise.all(
    data.results.map(async (movie: IMovieDetail) => {
      const detailsResponse = await fetch(
        `${BASE_MOVIE}/${movie.id}?${API_KEY}`
      );
      const details = await detailsResponse.json();

      return {
        ...movie,
        runtime: toHoursAndMinutes(details.runtime),
      };
    })
  );

  return {
    props: {
      movies: moviesWithRuntime || [],
      topRated: topRatedMovies.results,
    },
  };
};

export default Home;
