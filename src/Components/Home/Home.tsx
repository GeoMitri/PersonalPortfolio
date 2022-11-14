import { Box, Button, Grid, Typography } from "@mui/material";
import Splash from "./Home-Splash";
import ActionItems from "./Home-ActionItems";
import achievementCards from "./Home-AchievementCards";
import Blurb from "./Home-Blurb";
import useWindowDimensions from "../../Objects/windowDimensions";

import * as Scroll from "react-scroll";
import NextSectionButton from "./Home-NextSection";
import BackToTopButton from "./Home-BackToTop";
import { styled } from "@mui/material"

/**Landing page
 * Summarises me and the page */
export const Home = () => {

    return (
        <Box bgcolor="neutral.light" justifyContent={"center"} sx={{display: 'flex', flexWrap: "nowrap"}}>

                <BackToTopButton showThreshold={700}/>

                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid container xs={12} minHeight={700} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} 
                        sx={{position: 'relative', backgroundColor:"neutral.light"}}>

                        <Grid container xs={8} minHeight={700} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} 
                            sx={{position: 'relative'}}>
                            {Splash}
                            {ActionItems}
                            <NextSectionButton elementID="blurb"/>
                        </Grid>
                    </Grid>
                    
                    <Grid container id="blurb" xs={12} minHeight={700} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} 
                        sx={{position: 'relative', backgroundColor:"neutral.light"}}>

                        <Grid container xs={8} minHeight={700} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} sx={{position: 'relative'}}>
                            {Blurb}
                            <NextSectionButton elementID="achievements" />
                        </Grid>

                    </Grid>


                    <Grid id="achievements" container xs={8} minHeight={700} height={useWindowDimensions().height-70} sx={{position: 'relative', backgroundColor:"tan"}}>
                        <Grid container sx={{position: 'relative', backgroundColor:"steelblue"}}>
                            <Typography sx={{position: 'absolute'}} variant="h3"> 
                                My Achievements
                            </Typography>
                            <Grid container
                                direction="row" justifyContent="center" alignItems="center"
                                columnGap={3}
                                rowGap={3}
                                sx={{marginTop:12}}>
                            
                                {achievementCards}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    );
};