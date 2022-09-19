import { SECONDARY_COLOR } from "@/Constants";
import { IProject } from "@/model";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import Image from "next/image";
import github from "../../techicons/github.png";
import link from "../../techicons/link.png";

interface IProjectAccordionProps
{
    data: IProject;
    isExpanded: boolean;
    onExpanded: (aProjectId: string) => void;
}

const ProjectAccordion = (aProjectAccordionProps: IProjectAccordionProps) =>
{
    const { data, isExpanded, onExpanded } = aProjectAccordionProps;
    const { Name, Description, Features, Github, Website } = data;

    const ProjectDetails = (aProjectDetails: any) =>
    {
        const Features  = aProjectDetails.data;
    
        return (
            <Stack direction="row" justifyContent={"space-between"}>
                <Stack>
                    {Features.map((aFeature: string) => {
                        return <Typography> 👉 {aFeature} </Typography>}) }
                </Stack>
                <Stack>
                    <a href={Github} style={{ cursor: "pointer" }}>
                        <Image src={github} height={32} width={32} />
                    </a>
                { Website != "" &&
                    <a href={Website} style={{ cursor: "pointer" }}>
                        <Image src={link} height={32} width={32} />
                    </a>
                }
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
            onChange={() => onExpanded(Name)}
            style={lStyle}
        >
            <AccordionSummary
            expandIcon={<p>👇</p>}
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {Name}
                </Typography>
                <Typography sx={{ opacity: 0.6 }}>
                    {Description}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ProjectDetails data={Features}/>
            </AccordionDetails>
    </Accordion>
    )
}

export default ProjectAccordion;