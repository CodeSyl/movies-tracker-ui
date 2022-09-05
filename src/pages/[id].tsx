import { GetStaticPaths, GetStaticProps } from "next";
import { dataMocked } from "../movies_mock";
import { IMovieDetail } from "../types";

const MovieDetails = ({ movie }: { movie: any }) => {
  return <article>{movie?.overview}</article>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dataMocked.results.map((mv) => ({
    params: { id: mv.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fmv: IMovieDetail | undefined = dataMocked.results.find(
    (mv: IMovieDetail) => {
      return mv.id.toString() === params?.id;
    }
  );

  return { props: { movie: { ...fmv } } };
};

export default MovieDetails;
