import { Stack, Typography } from "@mui/material";

export interface ITitleProps
{
    title: string;
}

export const Title = (aProps: ITitleProps) =>
{
    return (
        <>
            <br></br>
            <Stack justifyContent="center" alignItems="center">
                <Typography variant="h5">
                    {aProps.title}
                </Typography>
            </Stack>
            <br></br>
        </>
    )
};
