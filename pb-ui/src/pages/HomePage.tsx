import { Button, Stack, Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
interface IHomePageProps
{

}

export const HomePage = (aHomeProps: any) =>
{
    const PageButton = (aPageButtonProps: any) =>
    {
        return (
        <Button
            variant="outlined"
            style={{ borderColor: "#DFE0E2" }}
            size="small">
            <Typography variant="h4">
                {aPageButtonProps.text}
            </Typography>
        </Button>
        );
    };

    return (
        <Stack spacing={1}>
            <Stack>
                <Typography variant="h1">
                    Hey, I'm Abdullah.
                </Typography>
            </Stack>
            <Stack direction="row" spacing={11.75}>
                <Typography variant="h3"> a Software Engineer, </Typography>
                <PageButton text="Work Experience 💼"/>
            </Stack>
            <Stack direction="row" spacing={25.15}>
                <Typography variant="h3"> an Aspiring Writer, </Typography>
                <PageButton text="My Blog ✍️"/>
            </Stack>
            <Stack direction="row" spacing={21.65}>
                <Typography variant="h3"> and Super Driven. </Typography>
                <PageButton text="My Projects 🚀"/>
            </Stack>
        </Stack>
    )
};
