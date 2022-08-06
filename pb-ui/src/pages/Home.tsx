import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { SECONDARY_COLOR } from "../Constants";

interface IPageButtonProps
{
    text: string;
    link: string;
}

type THome = () => JSX.Element;

export const Home: THome = () =>
{
    const PageButton = (aPageButtonProps: IPageButtonProps) =>
    {
        return (
        <Link href={`/${aPageButtonProps.link}`}>
            <Button
                variant="outlined"
                style={{ borderColor: SECONDARY_COLOR }}
                size="small">
                <Typography variant="h4">
                    {aPageButtonProps.text}
                </Typography>
            </Button>
        </Link>
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
                <PageButton text="Work Experience 💼" link={"work"}/>
            </Stack>
            <Stack direction="row" spacing={25.15}>
                <Typography variant="h3"> an Aspiring Writer, </Typography>
                <PageButton text="My Blog ✍️" link={"blog"}/>
            </Stack>
            <Stack direction="row" spacing={21.65}>
                <Typography variant="h3"> and Super Driven. </Typography>
                <PageButton text="My Projects 🚀" link={"projects"}/>
            </Stack>
        </Stack>
    )
};
