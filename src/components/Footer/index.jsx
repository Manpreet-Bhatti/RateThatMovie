import { Wrapper } from "../../../styles/index.styled";
import * as S from "./Footer.styled";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <S.Footer>
      <Wrapper>
        <S.FooterContainer>
          <S.FooterText>
            Made with <AiFillHeart color="#CE2029" /> by{" "}
            <S.FooterLink href="https://manpreetbhatti.com/" target="blank">
              Manpreet Bhatti
            </S.FooterLink>
          </S.FooterText>
          <S.FooterText>
            Powered by{" "}
            <Link
              passHref
              href={"https://www.themoviedb.org/documentation/api"}
            >
              <a target="_blank">
                <Image
                  src="/images/The Movie Database (TMDB).svg"
                  alt="The Movie Database (TMDB) logo"
                  width={"99px"}
                  height={"13px"}
                />
              </a>
            </Link>
          </S.FooterText>
        </S.FooterContainer>
      </Wrapper>
    </S.Footer>
  );
};

export default Footer;
