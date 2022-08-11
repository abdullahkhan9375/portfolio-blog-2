import { Theme } from '@/Constants';
import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import "../../src/styles.css";

export default function MyApp({ Component, pageProps }: AppProps)
{
  return (
  <ThemeProvider theme={Theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  );
}
