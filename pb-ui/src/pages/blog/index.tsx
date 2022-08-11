import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BlogPreview } from "./BlogPreview";

type TOpinion = "Article" | "Opinion" | "Story" | "Memoir";

export interface IBlogPreview
{
    name: string;
    description: string;
    keyword: string;
    genre: TOpinion;
    date: string;
    timeToRead: number;
}

const Blog = () =>
{
    const [blogPreviews, setBlogPreviews] = useState<IBlogPreview[]>([]);

    const callApi: IBlogPreview[] =
    [
        {
            name: "Post 1",
            description: "The first blog post I have ever written wow.",
            keyword: "cool",
            genre: "Opinion",
            date: "2022-01-01",
            timeToRead: 5,
        },
        {
            name: "Post 2",
            description: "The second blog post I have ever written wow.",
            keyword: "cool",
            genre: "Story",
            date: "2022-03-01",
            timeToRead: 10,
        },
        {
            name: "Post 3",
            description: "The third blog post I have ever written wow.",
            keyword: "cool",
            genre: "Article",
            date: "2022-05-01",
            timeToRead: 15,
        },
        {
            name: "Post 1",
            description: "The first blog post I have ever written wow.",
            keyword: "cool",
            genre: "Opinion",
            date: "2022-01-01",
            timeToRead: 5,
        },
        {
            name: "Post 2",
            description: "The second blog post I have ever written wow.",
            keyword: "cool",
            genre: "Story",
            date: "2022-03-01",
            timeToRead: 10,
        },
        {
            name: "Post 3",
            description: "The third blog post I have ever written wow.",
            keyword: "cool",
            genre: "Article",
            date: "2022-05-01",
            timeToRead: 15,
        }
    ];

    useEffect(() =>
    {
        setBlogPreviews(callApi);
    }, []);

    // Send a req to the API.
    // Get back blog previews.

    // renderBlogCard function. Creates a grid of BlogCards.
    // Headline blog card.
    // Side blog cards which will be scrollable.

    // Display BlogCards with blog previews.
    return (
        <Stack
            justifyContent="center"
            height={"100vh"}
            alignItems="center"
            spacing={10}>
            <BlogPreview data={blogPreviews.slice(0, 3)}/>
            <Typography variant="h1">
                The Sochmore Blog
            </Typography>
            <BlogPreview data={blogPreviews.slice(3, 6)}/>
        </Stack>
    );
};

export default Blog;
