import { Stack, Typography } from "@mui/material";

export interface IWorkExperience
{
    company: string;
    position: string;
    responsiblities: string[];
    fromDate: string;
    toDate: string;
    techStack: string[];
}

export interface IExperienceProps
{
    workExperience: IWorkExperience[];
}

export const WorkExperience = (aExperienceProps: IExperienceProps) =>
{
    const lExperienceCards: JSX.Element[] = aExperienceProps.workExperience.map((aExperience: IWorkExperience) =>
      {
        return (
            <Stack>
                <Typography variant="h6">
                    {aExperience.position}
                </Typography>
                <Stack>
                    <Stack direction="row">
                        <Typography>
                            {aExperience.company + " | "} 
                        </Typography> { aExperience.fromDate} - {aExperience.toDate}
                    </Stack>
                </Stack>
                {aExperience.responsiblities.map((aResponsibility: string) =>
                {
                    return <Typography>• {aResponsibility}</Typography>;
                })
                }
            </Stack>
        )
      })  

    return (
        <Stack>
            <Typography variant="h4">
                Work Experience
            </Typography>
            {lExperienceCards}
        </Stack>
    )
};