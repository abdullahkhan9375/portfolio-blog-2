import { SECONDARY_COLOR } from "@/Constants";
import { Stack, Typography } from "@mui/material";
import { IWorkExperience } from ".";

interface IWorkDetailProps
{
    data: IWorkExperience;
}

const WorkDetail = (aWorkDetailProps: IWorkDetailProps) =>
{
    const { company, position, responsiblities, fromDate, toDate } = aWorkDetailProps.data;

    const lDividerStyling: React.CSSProperties =
    {
        height: "190px",
        width: "0.3px",
        backgroundColor: SECONDARY_COLOR,
        alignSelf:"center",
    };

    const Divider = () => <div style={lDividerStyling}></div>;

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            width={"700px"}
            paddingRight={0}
            spacing={2}
        >
            <Stack direction="row" spacing={2}>
                <Divider/>
                <Stack direction="column" alignItems="baseline">
                    <Typography variant="h3">
                    {company} | {position}
                    </Typography>
                    {responsiblities.map((aResponsiblity: string) =>
                    {
                        return <Typography> * {aResponsiblity} </Typography>
                    })}
                </Stack>
            </Stack>
            <Typography variant="body1" paddingTop={2.2}>
                {fromDate} - {toDate}
            </Typography>
        </Stack>
    )
};

export default WorkDetail;
