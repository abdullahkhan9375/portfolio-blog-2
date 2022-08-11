import { SECONDARY_COLOR } from "@/Constants";
import { Accordion, AccordionDetails, AccordionSummary, Divider, Stack, Typography } from "@mui/material";
import { IProject } from "."

interface IProjectAccordionProps
{
    data: IProject;
    isExpanded: boolean;
    onExpanded: (aProjectId: string) => void;
}

const ProjectAccordion = (aProjectAccordionProps: IProjectAccordionProps) =>
{
    const { data, isExpanded, onExpanded } = aProjectAccordionProps;
    const { id, name, description, features, techStack, links } = data;

    const ProjectDetails = (aProjectDetails: any) =>
    {
        const features = aProjectDetails.data;
        return (
            <Stack>
                <Stack>

                </Stack>
                <Divider/>
                <Stack>
                    { features.map((aFeature: string) => {
                        return <Typography> * {aFeature} </Typography>}) }
                </Stack>
            </Stack>
        )
    }

    const lStyle: React.CSSProperties =
    {
        width: "722px",
        backgroundColor: "transparent",
        borderRadius: 0,
        border: `1px solid ${SECONDARY_COLOR}`,
        
    }

    return (
        <Accordion
            elevation={0}
            expanded={isExpanded}
            onChange={() => onExpanded(id)}
            style={lStyle}
        >
            <AccordionSummary
            expandIcon={<p>👇</p>}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {name}
                </Typography>
                <Typography sx={{ opacity: 0.6 }}>
                    {description}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ProjectDetails data={features}/>
            </AccordionDetails>
    </Accordion>
    )
}

export default ProjectAccordion;