import styled from "styled-components";
import theme from "./theme";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100%;
`;

export const Header = styled.header`
  background-color: ${(props) =>
    props.darken ? theme.colors.black : theme.colors.darkgrey};
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  margin-bottom: 25px;
  z-index: 1;
  transition: background-color 0.3s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderLink = styled.a`
  padding: 0 10px;
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.semibold};
  &:hover {
    color: ${theme.colors.red};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin: 0 15px;
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.title};
  margin-bottom: 10px;
`;

export const MovieSearchContainer = styled.div`
  width: 100%;
  margin: 10px 0 40px;
  display: flex;
`;

export const MovieSearch = styled.input`
  color: ${theme.colors.black};
  width: 100%;
  height: 50px;
  padding: 6px 35px 6px 20px;
  border-radius: 5px 0 0 5px;
  border: none;
  font-size: ${theme.fontSizes.body};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.grey};
  }
`;

export const SearchButton = styled.button`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  font-size: 25px;
  height: 50.3px;
  width: 80px;
  border-radius: 0 5px 5px 0;
  border: none;
  background-color: ${theme.colors.red};
  transition-duration: 0.4s;
  &:hover,
  &:active {
    background-color: #a51a21;
  }
`;

export const ViewFull = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  margin-bottom: 48px;
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #d4454c,
    #c80005,
    #d81016,
    #d70012
  );
  box-shadow: 0 5px 15px rgba(201, 3, 8, 0.4);
  &:hover,
  &:active {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: 48px;
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.body};
  line-height: ${theme.lineHeights.body};
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 0;
  }
  & > strong {
    font-size: ${theme.fontSizes.subtitle};
  }
`;

export const Disclaimer = styled.p`
  font-size: ${theme.fontSizes.tiny};
  color: ${theme.colors.lightgrey};
  font-weight: ${theme.fontWeights.semibold};
  text-align: center;
  margin-bottom: 20px;
  padding: 50px 15px 0 15px;
`;
