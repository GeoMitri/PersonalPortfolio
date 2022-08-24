import { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Chip, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const projects = [{"name":"test1"},{"name":"test2"},{"name":"test3"}];

const myProjects = [
    ["Officially Qualified","Graduate with a Bachelor of Science in Games Development."],
    ["Mathematical!","Recieve the Best Student Research Games Project Award for the educational game project GridBlade."],
    ["Sole Developer","Ship and commercialise the puzzle game Stepping Stones on Android and iOS platforms in a solo team."],
    ["Serious about Fun","Design and Develop 5 Serious Game projects."],
    ["Unified","Develop games and interactive software using Unity3D for 8+ years."],
    ["Learning Complete","Understand everything there is to know about game design and development"],
    // ["Partied Up","Work on a serious game in a team of other experienced game designers or game developers"],
    // ["Unreal Possibilities","Develop a game using Unreal."],
]


const projectCards = myProjects.map((project) =>
    <Card sx={{height: 300, minWidth: 800 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {project[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {project[1]}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

export const Projects = () => {
    
    const [formats, setFormats] = useState(() => ["all"]);

    const handleFormat = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: string[],
    ) => {
      setFormats(newFormats);
    };
  
    return (
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" margin={3}>
                <Grid item xs={12} sx={{backgroundColor:"aliceblue"}}>
                    {formats.toString()}
                </Grid>
                <Grid item xs={12} sx={{backgroundColor:"blanchedalmond"}}> 
                    <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="Filters"
                    >
                        <ToggleButton value="all" aria-label="all">
                            All
                        </ToggleButton>
                        <ToggleButton value="bold" aria-label="bold">
                            Content1
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            content2
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label="underlined">
                            content3
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid container xs={12} justifyContent="flex-start" alignItems="center" margin={3} sx={{backgroundColor:"aliceblue"}}>
                    <Grid container
                    direction="row" justifyContent="center" alignItems="center"
                    rowGap={4}
                    columnGap={8}
                    sx={{ backgroundColor:"magenta" }}
                    >
                        {projectCards}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};  