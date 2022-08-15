export type TLink =
{
    name: string;
    link: string;
};

export interface IProject
{
    id: string;
    name: string;
    description: string;
    features: string[];
    techStack: string[];
    links: TLink[];
}
