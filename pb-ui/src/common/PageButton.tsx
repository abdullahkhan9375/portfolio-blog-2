import { SECONDARY_COLOR } from "@/Constants";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface IPageButtonProps
{
    text: string;
    link: string;
}

export const PageButton = (aPageButtonProps: IPageButtonProps) =>
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
