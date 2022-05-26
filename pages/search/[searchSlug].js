import { useRouter } from "next/router";
import * as S from "../../styles/searchSlug.styled";
import { Wrapper } from "../../styles/index.styled";
import { FaChevronRight } from "react-icons/fa";

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/4/search/movie?api_key=${
      process.env.api_key
    }&query=${params.searchSlug.replaceAll("-", " ")}`
  );
  const listOfMovies = await res.json();

  return {
    props: {
      listOfMovies,
    },
  };
};

const ListOfMovies = ({ listOfMovies }) => {
  console.log(listOfMovies);
  const router = useRouter();
  const searchSlug = router.query.searchSlug;
  return (
    <Wrapper>
      <S.SearchResult>
        <FaChevronRight color="#CE2029" />{" "}
        <p>Movie results for &quot;{searchSlug.replaceAll("-", " ")}&quot;</p>
      </S.SearchResult>
      <S.MovieListContainer>
        {listOfMovies.results.map((movie) => {
          return (
            <div key={movie.id}>
              <p>{movie.original_title}</p>
            </div>
          );
        })}
      </S.MovieListContainer>
    </Wrapper>
  );
};

export default ListOfMovies;
