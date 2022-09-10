import { GetServerSideProps } from "next";
import SwiperCard from "../components/SwiperCard";
import { API_KEY, BASE_MOVIE, TRENDING_MOVIES_URL } from "../const";
import { dataMocked } from "../movies_mock";
import { IMovieDetail } from "../types";

const Home = ({ movies }: { movies: IMovieDetail[] }) => {
  return (
    <>
      <div
        className="bg-scroll w-4/5 h-1.5 p-5"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/user/erondu/700x400)",
        }}
      >
        <h1>dsad</h1>
      </div>
      <SwiperCard movies={movies} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(TRENDING_MOVIES_URL);
  const data = await res.json();

  return { props: { movies: data.results } };
};

export default Home;
