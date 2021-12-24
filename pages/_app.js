import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const colors = {
  main: '#650ec2',
  dark: '#3a0a6e',
  light: '#dddddd',
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
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
