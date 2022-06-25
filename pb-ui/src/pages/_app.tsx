import { AppProps } from 'next/app';
import '@/styles/global.css';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@emotion/react';

const font =  "'Lato', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font
  }
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

