import { Stack, Typography } from "@mui/material";
import { PageButton } from "@/common/PageButton";
import { IBlogPreview } from "@/model";
import { SECONDARY_COLOR } from "@/Constants";

interface IBlogCardProps extends IBlogPreview
{
    image?: string;
}

export const BlogCard = (aBlogCardProps: IBlogCardProps) =>
{
    return (
        <div style={{ width: 680, minHeight: 60 }}>
            <Stack padding={1} spacing={0.5} direction="column" height={"100%"}
            justifyContent="flex-start">
                <div style={{ borderBottom: `0.01px solid ${SECONDARY_COLOR}` }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                        <Stack direction="column">
                            <Typography variant="h3">
                                {aBlogCardProps.Name}
                            </Typography>
                        </Stack>
                        <PageButton text="Read 📖" link={"abc"} style={{
                            paddingTop: 8,
                            paddingBottom: 8,
                        }}/>
                    </Stack>
                    <Typography variant="body2" style={{ opacity: 0.6 }}>
                    {aBlogCardProps.TimeToRead} min read | {aBlogCardProps.Date}
                </Typography>
                </div>
                <Typography variant="body1">
                    {aBlogCardProps.Description}
                </Typography>
            </Stack>
        </div>
    );
};
