import { Box, Grid, Typography } from "@mui/material";
import splash from "./Home-Splash";
import actionItems from "./Home-ActionItems";
import achievementCards from "./Home-AchievementCards";
import blurb from "./Home-Blurb";

export const Home = () => {
    return (
            <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" margin={3}>
                        
                        {splash}
                        {actionItems}
                        {blurb}
                        
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