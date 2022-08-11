import { Stack, Typography } from "@mui/material";
import { IBlogPreview } from ".";
import { SECONDARY_COLOR } from "@/Constants";
import { PageButton } from "@/common/PageButton";

interface IBlogCardProps extends IBlogPreview
{
    image?: string;
}

export const BlogCard = (aBlogCardProps: IBlogCardProps) =>
{
    const lStyle: React.CSSProperties =
    {
        height: 300,
        width: 400,
        backgroundImage:  "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg)",
        backgroundSize: "cover",
        border: `solid ${SECONDARY_COLOR} 1px`,
        borderRadius: "0.5%",
    };

    return (
        <div style={{ ...lStyle }}>
            <Stack padding={1} paddingBottom={3} direction="column" height={"100%"}
            justifyContent="flex-end">
                <Stack direction="row" paddingBottom={23} justifyContent="space-between" alignItems="center">
                    <Typography variant="body1">
                        {aBlogCardProps.genre}
                    </Typography>
                    <Typography variant="body1">
                        {aBlogCardProps.timeToRead} min read
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">
                        {aBlogCardProps.name}
                    </Typography>
                    <PageButton text="Read" link={"abc"}/>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body1">
                        {aBlogCardProps.description}
                    </Typography>
                </Stack>
            </Stack>
        </div>
    );
};
