import { useState } from "react";
import { useRouter } from "next/router";
import * as S from "../../styles/searchSlug.styled";
import { Wrapper } from "../../styles/index.styled";
import { FaChevronRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Head from "next/head";
import InternalHeader from "../../src/components/InternalHeader";
import Pagination from "../../src/components/Pagination";

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/4/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
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
  const [currPage, setCurrPage] = useState(1);

  return (
    <>
      <Head>
        <title>RateThatMovie — List of Movies</title>
        <meta
          name="description"
          content="List of movies that match your search."
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <InternalHeader />
      <Wrapper>
        <S.SearchResult>
          <FaChevronRight color="#CE2029" />{" "}
          <p>Movie results for &quot;{searchSlug.replaceAll("-", " ")}&quot;</p>
        </S.SearchResult>
        <Pagination
          currentPage={currPage}
          totalCount={listOfMovies.total_results}
          pageSize={20}
          onPageChange={(page) => setCurrPage(page)}
        />
        <S.MovieListContainer>
          {listOfMovies.results.map((movie) => {
            return (
              <S.MovieCard key={movie.id}>
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                      : "/images/fallback-poster.jpg"
                  }
                  alt="Movie poster"
                  width={"185px"}
                  height={"242px"}
                  style={{
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                />
                <S.CardContent>
                  <S.CardContentTop>
                    <S.CardRating>
                      {movie.vote_count > 0 && (
                        <>
                          <AiFillStar color="#F7DF38" />{" "}
                          {parseFloat((movie.vote_average / 2).toFixed(1))}
                        </>
                      )}
                    </S.CardRating>
                    {movie.adult && <p>ADULT</p>}
                    <div>
                      {movie.release_date && movie.release_date.split("-")[0]}
                    </div>
                  </S.CardContentTop>
                  <div>
                    <p>{movie.original_title}</p>
                  </div>
                </S.CardContent>
              </S.MovieCard>
            );
          })}
        </S.MovieListContainer>
      </Wrapper>
    </>
  );
};

export default ListOfMovies;
