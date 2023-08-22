import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "#7affbb",
      main: "#3FD48B",
      dark: "#00a25d",
      contrastText: "#000",
    },
    secondary: {
      light: "#556ac2",
      main: "#194091",
      dark: "#001b63",
      contrastText: "#fff",
    },
    error: {
      light: "#ff565d",
      main: "#E70033",
      dark: "#ac000d",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffd168",
      main: "#FFA037",
      dark: "#c77100",
      contrastText: "#000",
    },
    info: {
      light: "#c2c2c2",
      main: "#6F6F6F",
      dark: "#444444",
      contrastText: "#fff",
    },
    success: {
      light: "#60e653",
      main: "#15b31d",
      dark: "#008200",
      contrastText: "#000",
    },
    background: {
      default: "#F1F6FF",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    h1: {
      fontSize: "7rem",
      fontWeight: 300,
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-.04em",
      lineHeight: "1.14286em",
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "-.02em",
      lineHeight: "1.30357em",
    },
    h3: {
      fontSize: "2.8125rem",
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.06667em",
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 300,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.20588em",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.35417em",
    },
    h6: {
      fontSize: "1.3125rem",
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.16667em",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.5em",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.3em",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 700,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.46429em",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "'Poppins', sans-serif",
      lineHeight: "1.375em",
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    },
    duration: {
      standard: 300,
    },
  },
});

export default theme;
