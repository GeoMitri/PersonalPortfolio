import { Box, CardMedia, Chip, Grid, Icon, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { Project } from "../../Objects/Interfaces";
import ProjectCarousel from "./ProjectTemplate-ProjectCarousel";

/** Templaye used to construct pages for Project Instances*/
function ProjectTemplate(project :Project) { 
    return(
        <Box bgcolor="neutral.light" sx={{display: 'flex', flexWrap: "nowrap",}}>
            <Grid container direction="row" margin={3}>
                
             <Grid container xs={12} direction="column" justifyContent="center" alignItems="center">
                    <Grid container xs={8} direction="column" justifyContent="center" alignItems="center">
                        <CardMedia 
                        component="img"
                        image={project.backgroundImage}
                        alt="George's Portrait"
                        sx={{flex:1, maxHeight:400, maxWidth:500, borderRadius:"5%"}}/>  
                    </Grid>
                </Grid>

                <Grid item xs={12} display="flex" alignItems={"center"} direction="column">
                    <Typography color={"neutral.dark"} variant="h1" fontWeight={"bold"} lineHeight={1.5}  justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    {project.name}
                    </Typography>

                    <Typography variant="h4" gutterBottom> 
                        {project.subtitle}
                    </Typography>
 
                    <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">  
                        {project.tags.map((tag) => <Chip key={tag.name} icon={<Icon>{tag.icon}</Icon>} label={tag.name} sx={{marginRight:0.5}}/>)}
                    </Grid>

                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"gold"}} direction="column" justifyContent="center" alignItems="center">
                    links go here
                </Grid>

                <Grid container direction="row" paddingX={8} sx={{backgroundColor:"steelblue"}}>

                <Grid container xs={4} sx={{backgroundColor:"neutral.main"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <Typography margin={5} align="left" variant="body1"> 
                        {project.about}
                    </Typography>
                </Grid>

                <Grid container xs={8} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <ProjectCarousel/>
                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"neutral.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>

                        <ListSubheader sx={{
                            fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                        }}
                        >
                            Experience Gained
                        </ListSubheader>
                        <ListItem >+10xp </ListItem>
                        <ListItem>Liberated to work with no restrictions</ListItem>
                        </List>
                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"player2.light"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>
                        <ListSubheader sx={{
                            fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                        }}
                        >
                            Personal Rank
                        </ListSubheader>
                        <ListItem >Double check your spelling</ListItem>
                        <ListItem>Your search may have been removed or is not yet in the system</ListItem>
                        </List>
                </Grid>
            
                <Grid container xs={6} sx={{backgroundColor:"player2.light"}} direction="column" justifyContent="center" alignItems="center">
                <List sx={{ listStyleType: 'disc' }}>
                        <ListSubheader sx={{
                            fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                        }}
                        >
                            F.A.Q
                        </ListSubheader>
                        <ListItem sx={{ display: 'list-item' }}>Why do you do this?</ListItem>
                        <ListItem >It Is Only If It Is.</ListItem>
                        </List>
                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"neutral.light"}} direction="column" justifyContent="center" alignItems="center">
                <List sx={{ listStyleType: 'disc' }}>
                    <ListSubheader sx={{
                        fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                    }}
                    >
                                Roles
                            </ListSubheader>
                            <ListItem sx={{ display: 'list-item' }}>Sound Engineer</ListItem>
                    </List>
                </Grid>
                </Grid>


                <Grid container xs={12} sx={{backgroundColor:"gold"}} direction="column" justifyContent="center" alignItems="center">
                    Contact Me! Button here
                </Grid>

            </Grid>
        </Box>
    )
}

export default ProjectTemplate;