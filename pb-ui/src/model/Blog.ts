type TOpinion = "Article" | "Opinion" | "Story" | "Memoir";

export interface IBlogPreview
{
    id: string;
    name: string;
    description: string;
    keyword: string;
    genre: TOpinion;
    date: string;
    timeToRead: number;
}
