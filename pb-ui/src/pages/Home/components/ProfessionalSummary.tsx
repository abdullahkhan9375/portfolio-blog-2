import { Stack, Typography } from "@mui/material";

export interface ISummaryProps
{
    summary: string;
}

export const ProfessionalSummary = (aSummaryProps: ISummaryProps) =>
{
    return (
        <Stack>
            <Typography variant="body1"> Professional Summary </Typography>
            <Typography variant="body2">
                {aSummaryProps.summary}
            </Typography>
        </Stack>
    )
}