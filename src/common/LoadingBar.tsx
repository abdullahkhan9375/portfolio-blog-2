import { Box, LinearProgress } from "@mui/material";

export const LoadingBar = () =>
{
    return (
    <Box sx={{ width: 200, height: 20, paddingTop: 5 }}>
        <LinearProgress />
    </Box>
    );
};
