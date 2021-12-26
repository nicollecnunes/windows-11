import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const colors = {
  main: "#650ec2",
  dark: "#3a0a6e",
  light: "#dddddd",
  grey: "#333333",
  darkgrey: "#232425",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { ...colors },
    background: { ...colors },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DndProvider>
  );
}

export default MyApp;
