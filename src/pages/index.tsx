import { GetServerSideProps } from "next";
import SwiperCard from "../components/SwiperCard";
import CardSlick from "../components/SwiperCard";
import { dataMocked } from "../movies_mock";
import { IMovieDetail } from "../types";

const Home = ({ movies }: { movies: IMovieDetail[] }) => {
  return (
    <div>
      <SwiperCard></SwiperCard>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch(TRENDING_MOVIES_URL);
  // const data = await res.json();
  return { props: { movies: dataMocked?.results } };
};

export default Home;
