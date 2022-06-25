import { Typography, Stack } from "@mui/material";

export interface INameProps
{
    first: string;
    last: string;
}

export const Name = (aNameProps: INameProps) =>
{
    return(
    <Stack justifyContent="center" alignItems="center">
        <Typography variant="h4">
            <span>{aNameProps.first}</span> {aNameProps.last}
        </Typography>
    </Stack>
    );
};
