import { useState, useEffect } from "react";
import { Wrapper } from "../../../styles/index.styled";
import * as S from "./InternalHeader.styled";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import useScrollListener from "../../hooks/useScrollListener";

const InternalHeader = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const scroll = useScrollListener();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scroll.y > 48 && scroll.y - scroll.lastY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scroll.y, scroll.lastY]);

  return (
    <S.Header hide={isVisible}>
      <Wrapper>
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
          <S.SearchContainer>
            <FaSearch
              width={"34px"}
              height={"34px"}
              color="#CE2029"
              style={{ marginLeft: "12px" }}
            />
            <S.MovieSearch
              type="text"
              placeholder="Enter movie name..."
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </S.SearchContainer>
        </S.HeaderContainer>
      </Wrapper>
    </S.Header>
  );
};

export default InternalHeader;
