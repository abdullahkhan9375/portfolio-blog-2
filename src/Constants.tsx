import { createTheme } from "@mui/material";

export const PRIMARY_COLOR = "#E2DCDE";
export const SECONDARY_COLOR = "#0B3142";
export const Theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1:
    {
      fontWeight: 600,
      fontSize: 74,
      color: SECONDARY_COLOR,
    },
    h3:
    {
      fontWeight: 250,
      fontSize: 36,
      color: SECONDARY_COLOR,
    },
    h4:
    {
      fontWeight: 350,
      fontSize: 15,
      color: SECONDARY_COLOR,
    }
  },
  palette: {
    primary:
    {
      main: SECONDARY_COLOR,
    }
  }
});
