import { IBlogPreview, IBlogPreviewResponse } from "@/model";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogPreview } from "./BlogPreview";

type TOpinion = "Article" | "Opinion" | "Story" | "Memoir";

const Blog = () =>
{
    const [blogPreviews, setBlogPreviews] = useState<IBlogPreview[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const getBlogPreviews = async(aPageNumber: number = 1) =>
    {
        let lResponse: IBlogPreviewResponse | undefined = undefined;
        try
        {
            const lRes = await fetch(`http://localhost:8080/blogpreviews/${aPageNumber}`);
            lResponse = await lRes.json();
            console.log(lResponse);
        }
        catch(err)
        {
            console.log("Error", err)
        }
    
        // Create ALERTS for user actions.

        if (lResponse === undefined)
        {
            console.log("error");
            return;
        }

        setBlogPreviews(lResponse.data);
    };

    useEffect(() =>
    {
        (async() =>
        { await getBlogPreviews(pageNumber); })();

    }, [pageNumber]);

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
            alignItems="center">
            <Typography variant="h1">
                The Sochmore Blog.
            </Typography>
            <BlogPreview data={blogPreviews.slice(0, 3)}/>
        </Stack>
    );
};

export default Blog;
