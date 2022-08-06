import { Stack, ThemeProvider } from "@mui/material";
import { Home } from "./Home";
import { Theme } from "../Constants";

export default function Main()
{
  return (
    <ThemeProvider theme={Theme}>
      <Stack
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Home/>
      </Stack>
    </ThemeProvider>
  );
}
