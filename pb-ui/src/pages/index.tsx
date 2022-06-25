import { Grid } from "@mui/material";
import { HomePage } from "./Home/HomePage";

export default function Home()
{
  return (
    <Grid container height={"100%"} width={"100%"}
    >
      <Grid item xs={12} xl={12}>
        <HomePage/>
      </Grid>
    </Grid>
  );
}
