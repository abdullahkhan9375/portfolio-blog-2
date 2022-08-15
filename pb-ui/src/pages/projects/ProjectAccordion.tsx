import { SECONDARY_COLOR } from "@/Constants";
import { IProject } from "@/model";
import { TLink } from "@/model/Project";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import Image from "next/image";
import github from "../../techicons/github.png";
import link from "../../techicons/link.png";
// import react from "../../techicons/react.png"
// import go from "../../techicons/go.png"
// import css from "../../techicons/css.png"
// import html from "../../techicons/html.png"
// import ts from "../../techicons/ts.png"
// import js from "../../techicons/js.png"
// import python from "../../techicons/python.png"

// import Image from "next/image";

interface IProjectAccordionProps
{
    data: IProject;
    isExpanded: boolean;
    onExpanded: (aProjectId: string) => void;
}

// const TechIconsMap: TTechIcon[] = 
// [
//     {
//         name: "React",
//         image: <Image src={react} layout="fixed"/>,
//     },
//     {
//         name: "Go",
//         image: <Image src={go}/>,
//     },
//     {
//         name: "CSS",
//         image: <Image src={css}/>,
//     },
//     {
//         name: "HTML",
//         image: <Image src={html}/>,
//     },
//     {
//         name: "Typescript",
//         image: <Image src={ts}/>,
//     },
//     {
//         name: "Javascript",
//         image: <Image src={js}/>,
//     },
//     {
//         name: "Python",
//         image: <Image src={python}/>,
//     }
// ];

const generateIcons = (aLink: TLink) =>
{
    if (aLink.name === "Github")
    {
        return (
                <a href={aLink.link} style={{ cursor: "pointer" }}>
                    <Image src={github} height={32} width={32}/>
                </a>
        );
    }
    else
    {
        return (
                <a href={aLink.link} style={{ cursor: "pointer" }}>
                    <Image src={link} height={32} width={32}/>
                </a>
        );
    }
}



const ProjectAccordion = (aProjectAccordionProps: IProjectAccordionProps) =>
{
    const { data, isExpanded, onExpanded } = aProjectAccordionProps;
    const { id, name, description, features, techStack, links } = data;

    const ProjectDetails = (aProjectDetails: any) =>
    {
        console.log(techStack);

        const features = aProjectDetails.data;
        return (
            <Stack direction="row" justifyContent={"space-between"}>
                <Stack>
                    { features.map((aFeature: string) => {
                        return <Typography> 👉 {aFeature} </Typography>}) }
                </Stack>
                <Stack>
                { links.map((aLink: TLink) => generateIcons(aLink)) }
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