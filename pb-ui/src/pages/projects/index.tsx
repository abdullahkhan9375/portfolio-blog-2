import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProjectAccordion from "./ProjectAccordion";

export interface IProject
{
    id: string;
    name: string;
    description: string;
    features: string[];
    techStack: string[];
    links: string[];
}

const Projects = () =>
{
    // TODO: Add local storage support.
    const [expandedProject, setExpandedProject] = useState<string>("Project-1");

    const lDummyData: IProject[] =
    [
        {
            id: "Project-1",
            name: "Notemaking App",
            description: "Self-explanatory title.",
            features: [
                "React front-end",
                "Randomized backgrounds from Unsplash",
                "Mobile responsive",
            ],
            techStack:
            [
                "React",
                "Netlify",
                "Custom CSS",
            ],
            links: ["github link"],
        },
        {
            id: "Project-2",
            name: "Breaking Bad Quiz",
            description: "Can you make pure meth?",
            features: [
                "React front-end",
                "Fetch API to grab images from an open-source API",
                "Fully mobile responsive.",
            ],
            techStack:
            [
                "React",
                "Netlify",
                "Custom CSS",
            ],
            links: ["github link"],
        },
        {
            id: "Project-3",
            name: "Google Apps vs Apple Apps",
            description: "An appstore comparison.",
            features: [
                "Exploratory Data analysis that tells a story",
                "Cutting edge python visualization libraries.",
                "Hosted on and powered by Kaggle.",
            ],
            techStack:
            [
                "Plotly",
                "Python",
            ],
            links: ["github link"],
        }
    ];

    return (
        <Stack
            height="100vh"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Typography variant="h1">
                My Personal Projects.
            </Typography>
            <Stack spacing={1}>
            {
                lDummyData.map((aDummyData: IProject) =>
                {
                    return (
                    <ProjectAccordion
                        data={aDummyData}
                        isExpanded={expandedProject === aDummyData.id}
                        onExpanded={setExpandedProject}
                    />)
                })
            }
            </Stack>
        </Stack>
    )
};

export default Projects;
