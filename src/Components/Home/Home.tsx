import { Box, Grid, Typography } from "@mui/material";
import Splash from "./Home-Splash";
import ActionItems from "./Home-ActionItems";
import achievementCards from "./Home-AchievementCards";
import Blurb from "./Home-Blurb";

/**Landing page
 * Summarises me and the page */
export const Home = () => {
    return (
            <Box bgcolor="secondary.main" justifyContent={"center"} sx={{display: 'flex', flexWrap: "nowrap",}}>
                <Grid container xs={8} direction="row" justifyContent="flex-start" alignItems="center">
                    
                    {Splash}
                    {ActionItems}
                    {Blurb}
                    
                    <Grid item xs sx={{backgroundColor:"steelblue"}}>
                        <Typography variant="h3"> 
                            My Achievements
                        </Typography>
                        <Grid container
                            direction="row" justifyContent="center" alignItems="center"
                            rowGap={1}
                            columnGap={1}
                            sx={{ backgroundColor:"magenta" }}>
                        
                            {achievementCards}

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
    );
};