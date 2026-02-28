import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "../App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7a5e4bff",
      dark: "#553824ff",
    },
    background: {
      main: "#FFEFDA",
      dark: "#FFE3C7",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Inter"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 500, fontSize: 64 },
    h2: { fontWeight: 500, fontSize: 40 },
    h3: { fontWeight: 500, fontSize: 32 },
    h4: { fontWeight: 500, fontSize: 24 },
    h5: { fontWeight: 500, fontSize: 20 },
    h6: { fontWeight: 500, fontSize: 16 },
    subtitle1: { fontWeight: 600, fontSize: 16 },
    subtitle2: { fontWeight: 600, fontSize: 14 },
    subtitle3: { fontWeight: 600, fontSize: 12 },
    body1: { fontWeight: 400, fontSize: 24 },
    body2: { fontWeight: 400, fontSize: 20 },
    body3: { fontWeight: 400, fontSize: 16 },
    caption: { fontWeight: 400, fontSize: 10 },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 20,
          fontWeight: 400,
        },
        // asterisk: {
        //   color: red[500],
        // },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 20,
          fontWeight: 400,
          color: "#265F39",
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          textTransform: "none",
        },
        filled: {
          m: 2,
          backgroundColor: "#E66E23",
          color: "#FFFFFF",
          fontWeight: 600,
          fontSize: "16px !important",
          ":hover": {
            backgroundColor: "#AD2E01",
          },
        },
      },
    },
  },
});

const ModuleLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default ModuleLayout;
