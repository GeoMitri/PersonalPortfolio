import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import achievementCards from "./Home-AchievementCards";
import ActionItems from "./Home-ActionItems";

/**Section of text exploring my deets further*/
const Missions = 
<Grid container direction="column" xs={12}>
    <Box>
        <Typography variant="h2" gutterBottom color={"player1.main"}> 
            Missions
        </Typography>
        <List>
            <ListItem>
                <Typography gutterBottom variant="h3"> 
                    Create fun experiences.
                </Typography>  
            </ListItem>
            <ListItem>
                <Typography gutterBottom variant="h3"> 
                    Harness fun beyond entertainment.
                </Typography>  
            </ListItem>
            <ListItem>
                <Typography gutterBottom variant="h3"> 
                    Concisely explain my job to my peers.
                </Typography>  
            </ListItem>

        </List>
    </Box>
</Grid>;


export default Missions;