import styled from "styled-components";
import theme from "./theme";

export const SearchResult = styled.div`
  align-items: center;
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.semibold};
  display: flex;
  & > p {
    margin: 0;
    padding-left: 15px;
  }
`;
