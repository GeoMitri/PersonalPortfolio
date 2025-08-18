import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import achievementCards from "./Home-AchievementCards";
import ActionItems from "./Home-ActionItems";

/**Section of text exploring my deets further*/
const Missions = 
<Grid container direction="column" xs={12}>
    <Box>
        <Typography variant="h2" gutterBottom color={"player1.main"}> 
            Career Missions
        </Typography>
        <List>
            <ListItem>
                <Typography gutterBottom variant="h3" sx={{paddingRight:1}}>
                    Conjure
                </Typography>
                <Typography gutterBottom variant="body1" sx={{paddingRight:1}}> 
                    fun experiences.
                </Typography>
            </ListItem>
            <ListItem>
                <Typography gutterBottom variant="h3" sx={{paddingRight:1}}> 
                    Cultivate
                </Typography>
                <Typography gutterBottom variant="body1" sx={{paddingRight:1}}> 
                    fun for personal, social and global good.
                </Typography>  
            </ListItem>
            <ListItem>
                <Typography gutterBottom variant="h3" sx={{paddingRight:1}}> 
                    Catalyse
                </Typography> 
                <Typography gutterBottom variant="body1" sx={{paddingRight:1}}> 
                    a people-first mindset with the many creative industries of the world
                </Typography> 
            </ListItem>

        </List>
    </Box>
</Grid>;


export default Missions;