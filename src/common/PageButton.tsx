import { SECONDARY_COLOR } from "@/Constants";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface IButtonBaseProps
{
    text: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

interface IPageButtonProps extends IButtonBaseProps
{
    link?: string;
}

const ButtonBase = (aButtonBaseProps: IButtonBaseProps) =>
{
    return (
        <Button
            variant="outlined"
            style={{ borderRadius: 0, borderColor: SECONDARY_COLOR, ...aButtonBaseProps.style }} 
            onClick={aButtonBaseProps.onClick}
            size="small">
            
            <Typography variant="h4">
                {aButtonBaseProps.text}
            </Typography>
        </Button>
    );
}

export const PageButton = (aPageButtonProps: IPageButtonProps) =>
{
    if (aPageButtonProps.onClick != undefined)
    {
        return <ButtonBase {...aPageButtonProps}/>
    }

    return (
    <Link href={`/${aPageButtonProps.link}`}>
        <ButtonBase {...aPageButtonProps} />        
    </Link>
    );
};
