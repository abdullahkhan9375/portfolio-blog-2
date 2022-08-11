import { Stack } from "@mui/material";
import { IBlogPreview } from ".";
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
            {
                 lBlogPreviews.map((aCard: IBlogPreview) =>
                {
                    return <BlogCard {...aCard}/>
                })
            }
        </Stack>
    )
};
