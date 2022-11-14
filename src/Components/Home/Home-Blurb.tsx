import { List, ListItem, Typography } from "@mui/material";
import { Grid } from '@mui/material';

/**Section of text exploring my deets further*/
const Blurb = 
    <>
        <Grid container direction="column" xs={12}>
            <Typography variant="h3" color={"player1.main"}> 
                Missions
            </Typography>
            <List>
                <ListItem>
                    <Typography variant="h4"> 
                        Create fun experiences.
                    </Typography>  
                </ListItem>
                <ListItem>
                    <Typography variant="h4"> 
                        Harness fun beyond entertainment.
                    </Typography>  
                </ListItem>
                <ListItem>
                </ListItem>
            </List>
            
            <Typography variant="h3" color={"player1.main"}> 
                About Me
            </Typography>

            <Typography variant="body1" color={"neutral.dark"}> 
                As a young child, before I was making Since a young child, I have been driven to create eye-opening experiences in fun and meaningful ways. My passion lies within the good that can come from video games for players and involved communities, whether it be for entertainment, education, or other areas.
            </Typography>            

            <Typography variant="h3" color={"player1.main"}> 
                Achievements
            </Typography>
        </Grid>
    </>;


export default Blurb;