import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as S from "../styles/index.styled";
import Footer from "../src/components/Footer";
import { FaSearch } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { DescriptionData } from "./data/index";

export default function Index() {
  const [search, setSearch] = useState("");

  return (
    <S.Body>
      <Head>
        <title>RateThatMovie</title>
        <meta
          name="description"
          content="Powered by The Movie Database (TMDb) and inspired by TV Time, a web app for avid movie watchers where one can lookup movies, add them to their lists, and rate them for other users to see."
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <S.Header>
        <S.Wrapper>
          <S.HeaderContainer>
            <Link passHref href={"/"}>
              <a>
                <Image
                  src="/images/logo.svg"
                  alt="RateThatMovie logo"
                  width={"57px"}
                  height={"34px"}
                  priority={true}
                />
              </a>
            </Link>
            <S.HeaderLinksContainer>
              <S.HeaderLink href="https://www.google.ca">Home</S.HeaderLink>
              <S.HeaderLink href="https://www.google.ca">Movies</S.HeaderLink>
            </S.HeaderLinksContainer>
          </S.HeaderContainer>
        </S.Wrapper>
      </S.Header>
      <S.Wrapper>
        <S.SearchContainer>
          <Link passHref href={"/"}>
            <a>
              <Image
                src="/images/logo.svg"
                alt="RateThatMovie logo"
                width={"168px"}
                height={"100px"}
              />
            </a>
          </Link>
          <S.Title>RateThatMovie</S.Title>
          <S.MovieSearchContainer>
            <S.MovieSearch
              type="text"
              placeholder="Enter movie name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <S.SearchButton>
              <FaSearch />
            </S.SearchButton>
          </S.MovieSearchContainer>
          <S.ViewFull>
            View Full Site{" "}
            <BsFillArrowRightCircleFill style={{ marginLeft: "10px" }} />
          </S.ViewFull>
        </S.SearchContainer>
        <S.ContentContainer>
          {DescriptionData.map((paragraph, index) => (
            <S.Description key={index}>{paragraph}</S.Description>
          ))}
        </S.ContentContainer>
        <S.ViewFull>
          Go To RateThatMovie{" "}
          <BsFillArrowRightCircleFill style={{ marginLeft: "10px" }} />
        </S.ViewFull>
        <S.Disclaimer>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </S.Disclaimer>
      </S.Wrapper>
      <Footer />
    </S.Body>
  );
}
