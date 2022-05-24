import styled from "styled-components";
import theme from "../../../styles/theme";

export const Footer = styled.footer`
  background-color: ${theme.colors.black};
  height: 60px;
  bottom: 0;
  width: 100%;
  margin-top: 25px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const FooterText = styled.p`
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.lightgrey};
  margin: 0;
`;

export const FooterLink = styled.a`
  position: relative;
  padding: 3.2px 0;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.6px;
    background-color: ${theme.colors.red};
    transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover {
    color: ${theme.colors.red};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
