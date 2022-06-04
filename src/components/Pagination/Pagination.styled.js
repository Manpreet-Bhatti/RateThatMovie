import styled from "styled-components";
import theme from "../../../styles/theme";

export const PaginationContainer = styled.div`
  display: flex;
  margin: 48px 0;
  font-size: ${theme.fontSizes.subtitle};
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

export const PaginationNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.grey};
  border-radius: 50%;
  transition: background-color 0.2s;
  user-select: none;
  :hover {
    background-color: ${theme.colors.red};
  }
`;

export const Pagination = styled.div`
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? theme.colors.red : "transparent"};
  transition: background-color 0.2s;
  width: 60px;
  line-height: 60px;
  text-align: center;
  user-select: none;
  :hover {
    background-color: ${theme.colors.grey};
  }
  :active {
    background-color: ${theme.colors.red};
  }
`;
