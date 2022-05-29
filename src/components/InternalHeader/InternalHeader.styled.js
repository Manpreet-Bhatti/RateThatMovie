import styled from "styled-components";
import theme from "../../../styles/theme";

export const Header = styled.div`
  background-color: ${theme.colors.black};
  width: 100%;
  height: 60px;
  position: sticky;
  top: ${(props) => (props.hide ? "0" : "-60px")};
  margin-bottom: 25px;
  z-index: 1;
  transition: top 0.3s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  background-color: white;
  align-items: center;
  border-radius: 3px;
`;

export const MovieSearch = styled.input`
  color: ${theme.colors.black};
  width: 100%;
  height: 34px;
  padding: 6px 12px 6px 21px;
  border: none;
  border-radius: 3px;
  font-size: ${theme.fontSizes.body};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.grey};
  }
`;
