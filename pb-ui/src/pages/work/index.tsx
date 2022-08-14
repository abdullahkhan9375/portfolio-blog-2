import { IWorkExperience, IWorkExperienceResponse } from "@/model";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import WorkDetail from "./WorkDetail";

const Work = () =>
{
    const [workData, setWorkData] = useState<IWorkExperience[]>([]);

     const getWorkExperience = async() =>
    {
        let lResponse: IWorkExperienceResponse | undefined = undefined;
        try
        {
            const lRes = await fetch(`http://localhost:8080/work`);
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

        setWorkData(lResponse.data);
    };

    useEffect(() =>
    {
        ( async () =>
        {
            await getWorkExperience();
        })();
    }, []);

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
                {workData.length === 0
                ? <Box sx={{ width: 200, height: 20, paddingTop: 5 }}>
                    <LinearProgress />
                  </Box>
                : workData.map((aData: IWorkExperience) =>
                    {
                        return <WorkDetail data={aData}/>
                    })
                }
            </Stack>
        </Stack>
    )
};

export default Work;
