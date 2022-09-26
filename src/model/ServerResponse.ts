import { IBlogPost, IBlogPreview } from "./Blog";
import { IProject } from "./Project";
import { IWorkExperience } from "./Work";

interface IServerResponseBase
{
    message: string;
}

export interface IBlogPreviewResponse extends IServerResponseBase
{
    data: IBlogPreview[];
}

export interface IWorkExperienceResponse extends IServerResponseBase
{
    data: IWorkExperience[];
}

export interface IProjectResponse extends IServerResponseBase
{
    data: IProject[];
}

export interface IBlogPostResponse extends IServerResponseBase
{
    data: IBlogPost;
}
