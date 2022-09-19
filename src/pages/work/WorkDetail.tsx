import { SECONDARY_COLOR } from "@/Constants";
import { IWorkExperience } from "@/model";
import { Stack, Typography } from "@mui/material";

interface IWorkDetailProps
{
    data: IWorkExperience;
}

const WorkDetail = (aWorkDetailProps: IWorkDetailProps) =>
{
    const { Name, Position, Responsibities, FromDate, ToDate } = aWorkDetailProps.data;

    return (
        <Stack direction="column" paddingTop={2}>
            <div style={{ width: "685px", borderBottom: `1px solid ${SECONDARY_COLOR}` }}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h3">
                        {Name} | {Position}
                    </Typography>
                    <Typography variant="body1" paddingTop={2.2}>
                        {FromDate} - {ToDate}
                    </Typography>
                </Stack>
            </div>
            <div style={{ paddingTop: 5, paddingBottom: 5 }}>
            {Responsibities.map((aResponsiblity: string) =>
            {
                return <Typography> 👉 {aResponsiblity} </Typography>
            })}
            </div>
        </Stack>
    )
};

export default WorkDetail;
