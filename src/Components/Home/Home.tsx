import { Box, Grid, Typography } from "@mui/material";
import Splash from "./Home-Splash";
import ActionItems from "./Home-ActionItems";
import achievementCards from "./Home-AchievementCards";
import Blurb from "./Home-Blurb";
import useWindowDimensions from "../../Objects/windowDimensions";

/**Landing page
 * Summarises me and the page */
export const Home = () => {
    
    return (
            <Box bgcolor="secondary.main" justifyContent={"center"} sx={{display: 'flex', flexWrap: "nowrap",}}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{marginLeft: 40, marginRight: 40, }}>

                    <Grid container xs={12} minHeight={600} height={useWindowDimensions().height-70} sx={{backgroundColor:"blanchedalmond"}}>
                        {Splash}
                        {ActionItems}
                    </Grid>
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