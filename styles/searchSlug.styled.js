import styled from "styled-components";
import theme from "./theme";

export const SearchResult = styled.div`
  align-items: center;
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.semibold};
  display: flex;
  padding-top: 20px;
  margin-bottom: 30px;
  & > p {
    margin: 0;
    padding-left: 15px;
  }
`;

export const MovieListContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 40px;
`;

export const MovieCard = styled.div`
  background-color: ${theme.colors.grey};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const CardContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.caption};
  color: ${theme.colors.lightgrey};
  & > p {
    margin: 0;
    :nth-child(2) {
      padding: 3px;
      border: 3px solid ${theme.colors.red};
      color: ${theme.colors.red};
      font-weight: ${theme.fontWeights.bold};
    }
  }
`;

export const CardRating = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`;
