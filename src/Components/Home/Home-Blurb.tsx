import { List, ListItem, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import achievementCards from "./Home-AchievementCards";

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
            
            <Typography variant="h3" gutterBottom color={"player1.main"}> 
                About Me
            </Typography>

            <Typography variant="body1" marginBottom={4} color={"neutral.dark"}> 
                As a young boy in playgrounds and backyards, I was inventing new rules for handball, organising Nintendo DS tournaments with friends and toying with a bizarre program called <b>Unity</b>. Strangely, I am still doing the same thing today: Designing and developing games.
                <br/><br/>
                My current design expertise is in <b>Serious Games</b>. I am fascinated by how games can propel players to achieve great things. "Fun" can help Mario reach Bowser's castle, and in the same way, it can teach students, train professionals or rehabilitate the impaired.
                <br/><br/>
                I have 3+ years of professional experience, designing and developing Serious Games with the University of Technology Sydney and Neurosicence Research Australia.
            </Typography>            

            <Typography variant="h3" gutterBottom color={"player1.main"}> 
                Achievements
            </Typography>
            <Grid container
                direction="row" justifyContent="center" alignItems="center"
                columnGap={3}
                rowGap={3}
                //sx={{marginTop:2}}
                >
            
                {achievementCards}
            </Grid>

        </Grid>
    </>;


export default Blurb;