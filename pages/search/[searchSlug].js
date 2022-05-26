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
  const router = useRouter();
  const searchSlug = router.query.searchSlug;
  return (
    <Wrapper>
      <S.SearchResult>
        <FaChevronRight color="#CE2029" />{" "}
        <p>Movie results for &quot;{searchSlug.replaceAll("-", " ")}&quot;</p>
      </S.SearchResult>
      <ul>
        <li>Movie 1</li>
        <li>Movie 2</li>
      </ul>
    </Wrapper>
  );
};

export default ListOfMovies;
