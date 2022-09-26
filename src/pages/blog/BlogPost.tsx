import { IBlogPost } from "./../../model";

interface IBlogPostProps
{
    data: IBlogPost
}

export const BlogPost = (aBlogPostProps: IBlogPostProps) =>
{
    const lProps = aBlogPostProps.data;
    
    return (
        <div>
            <div>
                { lProps.Title}
            </div>
            <div>
                { lProps.Body }
            </div>
        </div>  
    );
};
