import { createMuiTheme } from "@material-ui/core/styles";

const mainBlue = "#002B5C";
const mainYellow = "#EBAC26";
const mainDarkBlue = "#060B2D"
const mainGray = "#9195B3"
const darkRed = "#ab003c"
const white = "#E1F7FA"
export default createMuiTheme({
  palette: {
    common: {
      blue: `${mainBlue}`,
      yellow: `${mainYellow}`,
      darkBlue:`${mainDarkBlue}`,
      darkGray:`${mainGray}`,
      darkRed:`${darkRed}`,
      white:`${white}`
    },
    primary: {
      main: `${mainBlue}`,
    },
    secondary: {
      main: `${mainYellow}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
});
