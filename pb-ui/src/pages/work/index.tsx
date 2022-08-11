import { Stack, Typography } from "@mui/material";
import WorkDetail from "./WorkDetail";

export interface IWorkExperience
{
    company: string;
    position: string;
    responsiblities: string[];
    fromDate: string;
    toDate: string;
}

const Work = () =>
{
    const lDummyData: IWorkExperience[] =
    [
        {
            company: "Proxima Capital",
            position: "Junior SWE",
            responsiblities:
            [
                "Worked in PAS",
                "Had fun",
                "Enjoyed free lunches",
            ],
            fromDate: "2022/01/04",
            toDate: "Present",
        },
        {
            company: "EY",
            position: "PACE Developer",
            responsiblities:
            [
                "Worked on Maskforce",
                "Had fun",
                "Team lead.",
            ],
            fromDate: "2021/06/01",
            toDate: "2021/12/10",
        },
        {
            company: "Hearing Power",
            position: "Data Intern",
            responsiblities:
            [
                "Worked on Tinnibot",
                "Had fun",
                "Enjoyed working from home.",
            ],
            fromDate: "2021/01/01",
            toDate: "2022/05/01",
        },
    ];

    return (
        <Stack
            justifyContent="center"
            height={"100vh"}
            alignItems="center"
        >
            <Typography variant="h1">
                My Work Experience.
            </Typography>
            <Stack 
            paddingTop={2}>
                {lDummyData.map((aDummyData: IWorkExperience) =>
                {
                    return <WorkDetail data={aDummyData}/>
                })}
            </Stack>
        </Stack>
    )
};

export default Work;
