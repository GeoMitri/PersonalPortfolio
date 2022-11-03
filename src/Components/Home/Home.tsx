import { Box, Button, Grid, Typography } from "@mui/material";
import Splash from "./Home-Splash";
import ActionItems from "./Home-ActionItems";
import achievementCards from "./Home-AchievementCards";
import Blurb from "./Home-Blurb";
import useWindowDimensions from "../../Objects/windowDimensions";

import * as Scroll from "react-scroll";
import NextSectionButton from "./Home-NextSection";
import BackToTopButton from "./Home-BackToTop";


/**Landing page
 * Summarises me and the page */
export const Home = () => {

    return (
        <Box bgcolor="secondary.main" justifyContent={"center"} sx={{display: 'flex', flexWrap: "nowrap",}}>

                <BackToTopButton showThreshold={600}/>

                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid container xs={8} minHeight={600} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} sx={{position: 'relative', backgroundColor:"blanchedalmond"}}>
                        {Splash}
                        {ActionItems}
                        <NextSectionButton elementID="blurb" />
                    </Grid>
                    
                    <Grid id="blurb" container xs={8} minHeight={600} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} sx={{position: 'relative', backgroundColor:"blanchedalmond"}}>
                        {Blurb}
                        {/* <NextSectionButton elementID="achievements" /> */}
                    </Grid>

                    <Grid id="achievements" container xs={8} minHeight={600} alignItems="center" height={useWindowDimensions().height-70} sx={{position: 'relative', backgroundColor:"tan"}}>
                        <Grid container sx={{backgroundColor:"steelblue"}}>
                            <Typography variant="h3"> 
                                My Achievements
                            </Typography>
                            <Grid container
                                direction="row" justifyContent="center" alignItems="center"
                                rowGap={3}
                                columnGap={3}
                                sx={{ backgroundColor:"magenta", }}>
                            
                                {achievementCards}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container xs={8} minHeight={600} height={useWindowDimensions().height-70} sx={{backgroundColor:"blanchedalmond"}}>
                        <Button onClick={() => {Scroll.animateScroll.scrollToTop()}}>testasdfsa</Button>
                    </Grid>

                </Grid>
            </Box>
    );
};