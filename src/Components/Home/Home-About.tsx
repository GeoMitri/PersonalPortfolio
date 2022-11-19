import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import achievementCards from "./Home-AchievementCards";
import ActionItems from "./Home-ActionItems";

/**Section of text exploring my deets further*/
const About = 
    <Grid container direction="column" xs={12}>
        <Box>
            <Typography variant="h2" gutterBottom color={"player1.main"}> 
                About Me
            </Typography>

            <Typography variant="body1" marginBottom={4} m="auto" color={"neutral.dark"}> 
                As a young boy in playgrounds and backyards, I was inventing new rules for handball, organising Nintendo DS tournaments with friends and toying with a bizarre program called <b>Unity</b>. Strangely, I am still doing the same thing today: Designing and developing games.
                <br/><br/>
                My current design expertise is in <b>Serious Games</b>. I am fascinated by how games can propel players to achieve great things. "Fun" can help Mario reach Bowser's castle, and in the same way, it can teach students, train professionals or rehabilitate the impaired.
                <br/><br/>
                I have 3+ years of professional experience, designing and developing Serious Games with the University of Technology Sydney and Neurosicence Research Australia.
            </Typography>            
        </Box>
    </Grid>;


export default About;