import { Box, Card, Button, CardMedia, Chip, Grid, Icon, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { Project } from "../../Objects/Interfaces";
import ProjectCarousel from "./ProjectTemplate-ProjectCarousel"; 
import YoutubeExample from "../../PlayAround/YoutubeTesting"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


/** Templaye used to construct pages for Project Instances*/
function ProjectTemplate(project :Project) { 
    return(
        <Box bgcolor="neutral.light" sx={{display: 'flex', flexWrap: "startIcon={} nowrap"}}>
            
            <Box position={"absolute"} sx={{left:100, top:100}}>
                <Button startIcon={<ArrowLeftIcon/>} size="medium" href="/Projects" variant="outlined" color="player2">
                    <Typography color={"player2.main"}>
                        Projects
                    </Typography>
                </Button>
            </Box>

            <Grid container direction="row" margin={3}>
                
             {/* <Grid container xs={12} direction="column" justifyContent="center" alignItems="center">
                    <Grid container xs={8} direction="column" justifyContent="center" alignItems="center">
                        <CardMedia 
                        component="img"
                        image={project.backgroundImage}
                        alt="George's Portrait"
                        sx={{flex:1, maxHeight:400, maxWidth:500, borderRadius:"5%"}}/>  
                    </Grid>
                </Grid> */}


                <Grid item xs={12} marginTop={5} display="flex" alignItems={"center"} direction="column">
                    <Typography color={"neutral.dark"} variant="h1" fontWeight={"bold"} lineHeight={1.5}  justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    {project.name}
                    </Typography>

                    <Typography variant="h4" gutterBottom> 
                        {project.subtitle}
                    </Typography>
 
                    <Grid container xs={12} direction="row" justifyContent="center" alignItems="center" marginBottom={2}>  
                        {project.tags.map((tag) => <Chip key={tag.name} icon={<Icon>{tag.icon}</Icon>} label={tag.name} sx={{marginRight:1}}/>)}
                    </Grid>

                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"gold"}} direction="column" justifyContent="center" alignItems="center">
                    links go here
                </Grid>

                <Grid container direction="row" paddingX={8} sx={{backgroundColor:"steelblue"}}>

                <Grid container xs={12} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <ProjectCarousel/>
                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <Grid container xs={6} minWidth={400} display="flex" direction="row" justifyContent="center" alignItems="center">
                        <Typography margin={5} align="left" variant="body1"> 
                            {project.about}
                        </Typography>
                    </Grid>
                </Grid>


                
                {/* <Grid container xs={6} sx={{backgroundColor:"neutral.main"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <Typography margin={5} align="left" variant="body1"> 
                        {project.about}
                    </Typography>
                </Grid> */}

                <Grid container xs={6} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List>
                        <ListSubheader sx={{backgroundColor:"player2.main", color:"neutral.light", borderRadius:6}}>
                            <Typography align="center" variant="h6"> 
                                Experience Gained
                            </Typography>
                        </ListSubheader>
                        <ListItem >+10xp </ListItem>
                        <ListItem>Liberated to work with no restrictions</ListItem>
                    </List>
                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"player2.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>
                        <ListSubheader sx={{backgroundColor:"player2.main", color:"neutral.light", borderRadius:6}}>
                            <Typography align="center" variant="h6"> 
                                Personal Rank
                            </Typography>
                        </ListSubheader>
                        <ListItem >Double check your spelling</ListItem>
                        <ListItem>Your search may have been removed or is not yet in the system</ListItem>
                    </List>
                </Grid>
            
                <Grid container xs={6} sx={{backgroundColor:"player2.light"}} direction="column" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>
                        <ListSubheader sx={{backgroundColor:"player2.main", color:"neutral.light", borderRadius:6}}>
                            <Typography align="center" variant="h6"> 
                                F.A.Q
                            </Typography>
                        </ListSubheader>
                        <ListItem sx={{ display: 'list-item' }}>Why do you do this?</ListItem>
                        <ListItem >It Is Only If It Is.</ListItem>
                    </List>
                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"neutral.light"}} direction="column" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>
                        <ListSubheader sx={{backgroundColor:"player2.main", color:"neutral.light", borderRadius:6}}>
                            <Typography align="center" variant="h6"> 
                                Roles
                            </Typography>
                        </ListSubheader>
                        <ListItem sx={{ display: 'list-item' }}>Sound Engineer</ListItem>
                    </List>
                </Grid>
                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"gold"}} direction="row" justifyContent="center" alignItems="center">
                <Grid container xs={3} sx={{minWidth:500}} direction="row" justifyContent="space-around" alignItems="center">

                    <Button size="large" href="/Projects" variant="contained" color="player2">
                        <Typography color={"neutral.light"}>
                            Projects
                        </Typography>
                    </Button>

                    <Button size="large" variant="contained" color="player3">
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