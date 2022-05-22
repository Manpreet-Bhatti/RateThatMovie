const fontSizes = ["12px", "13px", "14px", "16px", "22px", "28px"];
const fontWeights = [300, 500, 700];
const lineHeights = [1, 1.25, 1.5];

const theme = {
  breakpoints: [640, 768, 1024, 1280],
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings: {
    normal: "normal",
  },
  colors: {
    black: "#161616",
    white: "#EEEEEE",
    gold: "#F7DF38",
    grey: "#1C1C1C",
    red: "#CE2029",
  },
};

theme.fontSizes.title = fontSizes[5];
theme.fontSizes.subtitle = fontSizes[4];
theme.fontSizes.body = fontSizes[3];
theme.fontSizes.caption = fontSizes[2];
theme.fontSizes.small = fontSizes[1];
theme.fontSizes.tiny = fontSizes[0];

theme.fontWeights.normal = fontWeights[0];
theme.fontWeights.semibold = fontWeights[1];
theme.fontWeights.bold = fontWeights[2];

theme.lineHeights.normal = lineHeights[0];
theme.lineHeights.title = lineHeights[1];
theme.lineHeights.body = lineHeights[2];

export default theme;
