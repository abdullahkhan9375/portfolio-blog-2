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
    return (
        <div style={{ width: 680 }}>
            <Stack padding={1} paddingBottom={3} direction="column" height={"100%"}
            justifyContent="flex-start">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="column" alignItems="baseline">
                        <Typography variant="h3">
                            {aBlogCardProps.name}
                        </Typography>
                        <Typography variant="body2" style={{ opacity: 0.6 }}>
                            {aBlogCardProps.timeToRead} min read | {aBlogCardProps.date}
                        </Typography>
                    </Stack>
                    <PageButton text="Read 📖" link={"abc"}/>
                </Stack>
                <Typography variant="body1">
                    {aBlogCardProps.description}
                </Typography>
            </Stack>
        </div>
    );
};
