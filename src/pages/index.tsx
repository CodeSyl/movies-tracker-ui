import { GetServerSideProps } from "next";
import PosterSwiper from "../components/PosterSiwper";
import { BackGroundBlurImage } from "../components/BackGroundBlurImage";

import { IMovieDetail } from "../types";
import { TRENDING_MOVIES_URL } from "../const";
import { useState } from "react";
import { dataMocked } from "../movies_mock";

const Home = ({ movies }: { movies: IMovieDetail[] }) => {
  const [bgImage, setBgImage] = useState<string>(movies[0].backdrop_path);

  const setBackGroundImage = (index: number) => {
    setBgImage(movies[index].backdrop_path);
  };

  return (
    <div>
      <BackGroundBlurImage image={bgImage} />
      <PosterSwiper
        movies={movies}
        setBackGroundImage={setBackGroundImage}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch(TRENDING_MOVIES_URL);
  // const data = await res.json();

  return { props: { movies:dataMocked.results   } };
};

export default Home;
