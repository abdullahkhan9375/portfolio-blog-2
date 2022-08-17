import { Stack } from "@mui/material";
import { Home } from "./Home";

export default function Main()
{
  return (
      <Stack
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Home/>
      </Stack>
  );
}
