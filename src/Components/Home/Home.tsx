import { Box, Button, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Splash from "./Home-Splash";
import ActionItems from "./Home-ActionItems";
import achievementCards from "./Home-AchievementCards";
import Missions from "./Home-Missions";
import useWindowDimensions from "../../Objects/windowDimensions";

import * as Scroll from "react-scroll";
import NextSectionButton from "./Home-NextSection";
import BackToTopButton from "./Home-BackToTop";
import { styled } from "@mui/material"
import Achievements from "./Home-Achievements";
import About from "./Home-About";

import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";


/**Landing page
 * Summarises me and the page */
export const Home = () => {

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        
        <Box bgcolor="neutral.light" justifyContent={"center"} sx={{display:'flex', flexWrap: "nowrap"}}>

                <BackToTopButton showThreshold={useWindowDimensions().height/4}/>

                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <Grid container xs={12} minHeight={700} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} 
                        sx={{position: 'relative', backgroundColor:"neutral.light"}}>

                        <Grid container xs={8} minHeight={700} justifyContent="center" alignItems="flex-start" height={useWindowDimensions().height-70} 
                            sx={{position: 'relative'}}>
                            {Splash}
                            {ActionItems}
                            <NextSectionButton elementID="missions"/>
                        </Grid>
                    </Grid>

                    <Grid container xs={12} justifyContent="center">
                        <Divider variant="fullWidth" style={{width:'100%'}} ></Divider>
                    </Grid>
                    
                    <Grid container id="missions" xs={12} justifyContent="center" alignItems="center" minHeight={useWindowDimensions().height-70} 
                        sx={{position: 'relative', backgroundColor:"neutral.light"}}>

                        <Grid container xs={11} md={7} justifyContent="center" alignItems="center" minHeight={useWindowDimensions().height-70} sx={{position: 'relative', backgroundColor:"neutral.light"}}>
                            {Missions}
                            <NextSectionButton elementID="about" />
                        </Grid>
                    </Grid>

                    <Grid container xs={12} justifyContent="center">
                        <Divider variant="fullWidth" style={{width:'100%'}} ></Divider>
                    </Grid>

                    <Grid container id="about" xs={12} justifyContent="center" alignItems="center" minHeight={useWindowDimensions().height-70} 
                        sx={{position: 'relative', backgroundColor:"neutral.light"}}>

                        <Grid container xs={11} md={7} justifyContent="center" alignItems="center" minHeight={useWindowDimensions().height-70} sx={{position: 'relative'}}>
                            {About}
                            <NextSectionButton elementID="achievements" />
                        </Grid>
                    </Grid>

                    <Grid container xs={12} justifyContent="center">
                        <Divider variant="fullWidth" style={{width:'100%'}} ></Divider>
                    </Grid>

                    <Grid container id="achievements" xs={12} justifyContent="center" alignItems="center" minHeight={useWindowDimensions().height-70} 
                        sx={{position: 'relative', backgroundColor:"neutral.light"}}>

                        <Grid container xs={11} md={7} justifyContent="center" alignItems="center" minHeight={useWindowDimensions().height-70} sx={{position: 'relative', marginTop:8}}>
                            {Achievements}
                        </Grid>
                    </Grid>

                    <Grid container direction="column" xs={12}>
                        <Box marginY={10}>
                        <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                            <Grid container xs={3} minWidth={{md: 500}} direction="row" justifyContent="space-around" alignItems="center">
                                <Button size="large" href="/#/Projects" variant="contained" color="player2" sx={{margin:1}}>
                                    <Typography color={"neutral.light"}>
                                        Projects
                                    </Typography>
                                </Button>

                                <Button size="large" href="/#/Contact" variant="outlined" color="player3" sx={{margin:1}}>
                                    <Typography color={"player3.main"}>
                                        Contact
                                    </Typography>
                                </Button>
                            </Grid>
                            </Grid>
                        </Box>
                    </Grid>                    
                </Grid>
            </Box>
    );
};