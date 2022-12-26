import { Box, Card, Button, CardMedia, Chip, Grid, Icon, List, ListItem, ListSubheader, Typography, ListItemText, ListItemIcon, Tooltip } from "@mui/material";
import { Project } from "../../Objects/Interfaces";
import ProjectCarousel from "./ProjectTemplate-Carousel"; 
import YoutubeItem from "./ProjectTemplate-YoutubeItem"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import useWindowDimensions from "../../Objects/windowDimensions";


/** Templaye used to construct pages for Project Instances*/
function ProjectTemplate(project :Project) {

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return(
        <Box bgcolor="neutral.light" sx={{display: 'flex', flexWrap: "startIcon={} nowrap"}}>
            
            <Box position={"absolute"} sx={{left:{xs:20, md:100}, top:{xs:80, md:100}}}>
                <Button startIcon={<ArrowLeftIcon/>} size="medium" href="/#/Projects" variant="outlined" color="player2">
                    <Typography color={"player2.main"}>
                        Projects
                    </Typography>
                </Button>
            </Box>

            <Grid container direction="row">
                
                <Grid item xs={12} marginTop={7} marginX={1} display="flex" alignItems={"center"} direction="column" >
                    <Typography color={"neutral.dark"} variant="h1" fontWeight={"bold"} lineHeight={1.5}  justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    {project.name}
                    </Typography>

                    <Typography variant="h4" gutterBottom> 
                        {project.subtitle}
                    </Typography>
 
                    <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" marginBottom={6}>  
                        {project.tags.map((tag) => <Chip key={tag.name} icon={<Icon>{tag.icon}</Icon>} label={tag.name} sx={{marginRight:1}}/>)}
                    </Grid>

                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <ProjectCarousel items={project.carouselItems!} h={useWindowDimensions().width < 900 ? 430/1.5 : 430}/>
                </Grid>

                <Grid container direction="row" paddingX={8}>

                <Grid container xs={12} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <Grid container xs={12} md={6} minWidth={{xs:0, md:600}} display="flex" direction="row" justifyContent="center" alignItems="center">
                        <Typography marginX={{xs:0, md:5}} marginY={5} marginBottom={12} align="left" variant="body1"> 
                            {project.about}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={12} sx={{marginBottom:12}} direction="row" justifyContent="center" alignItems="center">
                    {project.ExternalItems}
                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List>
                    <ListSubheader sx={{border:3, borderColor:"player2.main", backgroundColor:"neutral.light", color:"player2.main", borderRadius:6}}>
                            <Tooltip title="Experience Gained: A list of skills and the extent to which they were developed from this project." placement="top" arrow>
                                <Typography align="center" variant="h6">
                                    Experience Gained
                                    <HelpIcon fontSize="small" sx={{marginLeft:0.5, top:5}}/>
                                </Typography>
                            </Tooltip>
                        </ListSubheader>
                        {project.experience.map((xp) => 
                            <ListItem sx={{height:45, marginY:2}}>
                                <ListItemIcon>
                                    <List>
                                        {[...Array(xp[1])].map( (_,i) => 
                                            <KeyboardArrowUpSharpIcon fontSize="large" color="primary" sx={{marginY:-2.8, display:'flex', justifyContent:'flex-end'}}/>
                                            )}
                                    </List>
                                </ListItemIcon>
                                <ListItemText primary={xp[0]} sx={{marginY:-2.4, display:'flex'}}/>
                            </ListItem>
                        )}
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                    </List>
                </Grid>
                </Grid>

                <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                <Grid container xs={3} sx={{minWidth:{xs:0,md:500}}} direction="row" justifyContent="space-around" alignItems="center">

                    <Button size="large" href="/#/Projects" sx={{minWidth:180, margin:1, marginBottom:{md:5}}} variant="outlined" color="player2">
                        <Typography color={"player2.main"}>
                            More Projects
                        </Typography>
                    </Button>

                    <Button size="large" href="/#/Contact" variant="contained" color="player3" sx={{margin:1, marginBottom:5}}>
                        <Typography color={"neutral.light"}>
                            Contact
                        </Typography>
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProjectTemplate;