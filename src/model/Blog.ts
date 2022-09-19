type TOpinion = "Article" | "Opinion" | "Story" | "Memoir";

export interface IBlogPreview
{
    Name: string;
    Description: string;
    Keywords: string[];
    Genre: TOpinion;
    Date: string;
    TimeToRead: number;
    PostId: number;
}
