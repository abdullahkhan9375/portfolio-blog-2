import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { HomePage } from "./HomePage";

const font =  "'Roboto', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
    h1:
    {
      fontWeight: 600,
      fontSize: 74,
      color: "#DFE0E2"
    },
    h3:
    {
      fontWeight: 250,
      fontSize: 36,
      color: "#DFE0E2",
    },
    h4:
    {
      fontWeight: 350,
      fontSize: 15,
      color: "#DFE0E2",
    }
  }
});

export default function Home()
{
  return (
    <ThemeProvider theme={theme}>
      <Stack
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <HomePage/>
      </Stack>
    </ThemeProvider>
  );
}
