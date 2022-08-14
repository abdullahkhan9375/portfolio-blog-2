import { SECONDARY_COLOR } from "@/Constants";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface IPageButtonProps
{
    text: string;
    link: string;
    style?: React.CSSProperties;
}

export const PageButton = (aPageButtonProps: IPageButtonProps) =>
{
    return (
    <Link href={`/${aPageButtonProps.link}`}>
        <Button
            variant="outlined"
            style={{ borderRadius: 0, borderColor: SECONDARY_COLOR, ...aPageButtonProps.style }} 
            size="small">
            <Typography variant="h4">
                {aPageButtonProps.text}
            </Typography>
        </Button>
    </Link>
    );
};
