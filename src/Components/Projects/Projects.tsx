import { ReactNode, useState } from "react";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, Icon, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
//Icons
import StorefrontIcon from '@mui/icons-material/Storefront';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import myImage from "./ProjectButtonPreview/SteppingStones/ss2.jpg";


interface Tag {
    name: string;
    icon: ReactNode;
}

const Serious : Tag = {
    name: "Serious Game",
    icon: <PsychologyIcon/> 
};

const Shipped : Tag = {
    name: "Shipped",
    icon: <StorefrontIcon/> 
};

const Playable : Tag = {
    name: "Play Now",
    icon: <SportsEsportsIcon/>
};

const NonGame : Tag = {
    name: "Non-Game",
    icon: <SportsEsportsIcon/>
};

interface Project {
    name: string;
    description: string;
    tags: Tag[];
    backgroundImage: string; //??
}

const GridBlade : Project = {
    name: "GridBlade",
    description: "This is Grid Blade",
    tags: [Serious],
    backgroundImage: ""
}

const SteppingStones : Project = {
    name: "Stepping Stones",
    description: "This is Stepping Stones",
    tags: [Shipped],
    backgroundImage: ""
}

const SmartStep : Project = {
    name: "Smart±Step",
    description: "",
    tags: [Serious, Shipped],
    backgroundImage: ""
}

const ChoiceStepper : Project = {
    name: "Choice Stepper Reaction Test",
    description: "",
    tags: [Serious, Shipped],
    backgroundImage: ""
}

const SallysApples : Project = {
    name: "Sally's Apples",
    description: "",
    tags: [Serious],
    backgroundImage: ""
}

const LastIsland : Project = {
    name: "Last Island",
    description: "",
    tags: [],
    backgroundImage: ""
}

const DescendantOfSoul : Project = {
    name: "Descendant of Soul",
    description: "",
    tags: [],
    backgroundImage: ""
}

const GetMeOut : Project = {
    name: "Get Me Out!",
    description: "",
    tags: [],
    backgroundImage: ""
}

const SpaceWars : Project = {
    name: "Space Wars",
    description: "",
    tags: [],
    backgroundImage: ""
}

const WatchDesignerPro : Project = {
    name: "Watch Designer Pro",
    description: "",
    tags: [],
    backgroundImage: ""
}



const myProjects = [GridBlade, SteppingStones, SmartStep];
const myTags = [Serious, Shipped, Playable, NonGame];


// const projectCards = myProjects.map((project) =>
//     <Card sx={{height: 300, minWidth: 800 }}>
//         <CardContent>
//             <Typography>
//             </Typography>
//             <Typography gutterBottom variant="h5" component="div">
//                 {project.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//                 {project.description}
//             </Typography>
//                 {project.tags.map((tag) => 
//                     <Chip icon={<Icon>{tag.icon}</Icon>} label={tag.name} />
//                 )}
//         </CardContent>
//     </Card>
// );

export const Projects = () => {
    
    const [displayedProjects, setDisplayedProjects] = useState<Project[] | null>(myProjects);
    const [activeTags, setActiveTags] = useState<Tag[] | null>(myTags);

    const onFilterChange = (
      event: React.MouseEvent<HTMLElement>,
      newTags: Tag[] | null,
    ) => {
        if(newTags !== null){
            setActiveTags(newTags);
            // console.log(activeTags);
    
            const newDisplayedProjects = myProjects.filter((project) => 
                project.tags.some((tag) => newTags?.includes(tag)));
                    
            setDisplayedProjects(newDisplayedProjects);            
        }
    };
  
    return (
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" margin={3}>
                <Grid item xs={12} sx={{backgroundColor:"aliceblue"}}>
                    {activeTags?.map((tag) => tag.name)}
                </Grid>
                <Grid item xs={12} sx={{backgroundColor:"blanchedalmond"}}> 
                    <ToggleButtonGroup 
                    value={activeTags}
                    onChange={onFilterChange}
                    exclusive
                    aria-label="tag-filters">
                        <ToggleButton value={myTags} aria-label="all">
                            All 
                        </ToggleButton>
                        {myTags.map((tag) => 
                            <ToggleButton value={[tag]} aria-label={tag.name}>
                                {tag.name}
                            </ToggleButton>
                        )}
                    </ToggleButtonGroup>
                </Grid>
                <Grid container
                direction="row" justifyContent="center" alignItems="center"
                rowGap={4}
                columnGap={8}
                margin={3}
                sx={{ backgroundColor:"magenta" }}>
                    {displayedProjects?.map((project) =>
                        <Card key={project.name} sx={{height: 400, minWidth: 400, backgroundImage: {myImage}}}>
                            <CardMedia
                                component="img"
                                image={myImage}
                                alt="test"
                                sx={{height: 250, width: 400}}
                            />
                            <CardContent sx={{backgroundImage: {myImage}}}>
                            <Typography>
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div">
                                {project.name}
                            </Typography>
                            {project.tags.map((tag) => 
                                <Chip key={tag.name} icon={<Icon>{tag.icon}</Icon>} label={tag.name} />
                            )}
                            <Typography paddingTop={2} variant="body2" color="text.secondary">
                                {project.description}
                            </Typography>
                            </CardContent>
                        </Card>
                    )}
                   <Card sx={{height: 400, minWidth: 400, backgroundImage: {myImage}}}>
                        <CardActionArea sx={{position:"relative", height:"100%", width: "100%"}}>
                            <CardMedia
                                component="img"
                                image={myImage}
                                alt="test"
                                sx={{height:"100%", width: "100%"}}
                                />
                            <CardContent sx={{position:"absolute", bottom: 0, left: 0, width: "100%"}}>
                                <Typography sx={{position:"absolute"}} variant="body2" color="text.secondary">    
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={styles.card}>
                    <CardMedia image={myImage} style={styles.media}/>
                        <Typography sx={styles.overlay} variant="body2" color="text.secondary">
                            asdfhasjfksjdfkajsh
                        </Typography>
                    </Card>
                </Grid> 
            </Grid>
        </Box>
    );
};  

const styles = {
    media: {
       height: 0,
       paddingTop: '56.25%' // 16:9
    },
    card: {
       position: 'relative',
    },
    overlay: {
       position: 'absolute',
       top: '20px',
       left: '20px',
       color: 'black',
       backgroundColor: 'white'
    }
 }