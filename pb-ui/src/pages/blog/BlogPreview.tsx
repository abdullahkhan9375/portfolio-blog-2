import { IBlogPreview } from "@/model";
import { Box, LinearProgress, Stack } from "@mui/material";
import { BlogCard } from "./BlogCard";

interface IBlogPreviewProps
{
    data: IBlogPreview[];
}

export const BlogPreview = (aBlogPreviewProps: IBlogPreviewProps) =>
{
    const lBlogPreviews: IBlogPreview[] = aBlogPreviewProps.data;

    return (
        <Stack direction="column" spacing={1}>
            {lBlogPreviews.length === 0
                ? <Box sx={{ width: 200, height: 20, paddingTop: 5 }}>
                    <LinearProgress />
                  </Box>
                : lBlogPreviews.map((aCard: IBlogPreview) =>
                {
                    return <BlogCard {...aCard}/>
                })
            }
        </Stack>
    )
};
