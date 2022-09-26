import { PageButton } from "@/common/PageButton";
import { Stack, Typography } from "@mui/material";

type THome = () => JSX.Element;

export const Home: THome = () =>
{
    return (
        <Stack spacing={1}>
            <Stack>
                <Typography variant="h1">
                    Hey, I'm Abdullah.
                </Typography>
            </Stack>
            <Stack direction="row" spacing={13}>
                <Typography variant="h3"> a Software Engineer, </Typography>
                <PageButton text="Work Experience 💼" link={"work"}/>
            </Stack>
            <Stack direction="row" spacing={26.25}>
                <Typography variant="h3"> an Aspiring Writer, </Typography>
                <PageButton text="My Blog ✍️" link={"blog"}/>
            </Stack>
            <Stack direction="row" spacing={23.10}>
                <Typography variant="h3"> and Super Driven. </Typography>
                <PageButton text="My Projects 🚀" link={"projects"}/>
            </Stack>
        </Stack>
    )
};
