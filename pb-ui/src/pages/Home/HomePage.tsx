import { Grid, ThemeProvider, Typography } from '@mui/material';
import { INameProps, Name } from './components/Name';
import { ISummaryProps, ProfessionalSummary } from './components/ProfessionalSummary';
import { ITitleProps, Title } from './components/Title';
import { IExperienceProps, IWorkExperience, WorkExperience } from './components/WorkExperience';

interface IResumeInfo
{
  name: INameProps;
  title: string;
  summary: string;
  workExperience:  IWorkExperience[];
}

export const HomePage = () =>
{

  const lDummyData: IResumeInfo =
  {
    name:
    {
      first: "Abdullah",
      last: "Khan",
    },
    title: "Software Engineer",
    summary: "Wow I am a software engineer. Music is a beautiful thing man. Mac Miller said so. Wow I am a software engineer. Music is a beautiful thing man. Mac Miller said so. Wow I am a software engineer. Music is a beautiful thing man. Mac Miller said so.",
    workExperience:
    [
      {
        company: "Proxima Capital",
        position: "Software Engineer",
        fromDate:"Jan 2022",
        toDate: "Present",
        techStack: ["React", "Typescript", "DynamoDB", "AWS"],
        responsiblities: ["Worked on a React APP.", "Went for Coffee runs.", "Had tons of fun."]
      },
      {
        company: "Proxima Capital",
        position: "Software Engineer",
        fromDate:"Jan 2022",
        toDate: "Present",
        techStack: ["React", "Typescript", "DynamoDB", "AWS"],
        responsiblities: ["Worked on a React APP.", "Went for Coffee runs.", "Had tons of fun."]
      },
      {
        company: "Proxima Capital",
        position: "Software Engineer",
        fromDate:"Jan 2022",
        toDate: "Present",
        techStack: ["React", "Typescript", "DynamoDB", "AWS"],
        responsiblities: ["Worked on a React APP.", "Went for Coffee runs.", "Had tons of fun."]
      },
    ],
  }

  // Make an API Call here.

  return (
  <Grid container justifyContent={"center"} alignItems="center" padding={3} paddingTop={8}>
    <Grid item xs={12}>
      <Name {...lDummyData.name}/>
    </Grid>
    <Grid item xs={12}>
      <Title title={lDummyData.title}/>
    </Grid>
    <Grid item xs={12} xl={4}>
      <ProfessionalSummary summary={lDummyData.summary}/>
    </Grid>
    <Grid item xs={12} xl={4}>
      <WorkExperience workExperience={lDummyData.workExperience}/>
    </Grid>
  </Grid>
  );
};
