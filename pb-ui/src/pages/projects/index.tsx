import { IProject, IProjectResponse } from "@/model";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProjectAccordion from "./ProjectAccordion";

const Projects = () =>
{
    // TODO: Add local storage support.
    const [expandedProject, setExpandedProject] = useState<string>("Project-1");
    const [projects, setProjects] = useState<IProject[]>([]);

    const getProjects = async() =>
    {
        let lResponse: IProjectResponse | undefined = undefined;
        try
        {
            const lRes = await fetch(`http://localhost:8080/projects`);
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

        setProjects(lResponse.data);
    };

    useEffect(() =>
    {
        (async() =>
        {
            await getProjects();
        })();
    }, []);

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
                projects.length === 0
                    ? <Box sx={{ width: 200, height: 20, paddingTop: 5 }}>
                        <LinearProgress />
                    </Box>
                    : projects.map((aData: IProject) =>
                    {
                        return (
                        <ProjectAccordion
                            data={aData}
                            isExpanded={expandedProject === aData.id}
                            onExpanded={setExpandedProject}
                        />
                        )
                    })
            }
            </Stack>
        </Stack>
    )
};

export default Projects;
