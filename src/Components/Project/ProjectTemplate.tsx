import { Box, CardMedia, Chip, Grid, Icon, List, ListItem, ListSubheader, Typography } from "@mui/material";
import { Project } from "../../Objects/Interfaces";

/** Templaye used to construct pages for Project Instances*/
function ProjectTemplate(project :Project) { 
    return(
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
            <Grid container direction="row" margin={3} sx={{backgroundColor:"steelblue"}}>
                
                <Grid container xs={12} sx={{backgroundColor:"azure"}} direction="column" justifyContent="center" alignItems="center">
                    <CardMedia 
                    component="img"
                    image={project.backgroundImage}
                    alt="George's Portrait"
                    sx={{maxWidth:400}}/>  
                </Grid>

                <Grid item xs={12} display="flex" alignItems={"center"} sx={{backgroundColor:"teal"}} direction="column">
                    <Typography variant="h1"> 
                        {project.name}
                    </Typography>

                    <Typography variant="h2"> 
                        {project.subtitle}
                    </Typography>
 
                    <Grid container xs={12} sx={{backgroundColor:"azure"}} direction="row" justifyContent="center" alignItems="center">  
                        {project.tags.map((tag) => <Chip key={tag.name} icon={<Icon>{tag.icon}</Icon>} label={tag.name} />)}
                    </Grid>

                </Grid>

                <Grid container xs={12} sx={{backgroundColor:"gold"}} direction="column" justifyContent="center" alignItems="center">
                    links go here
                </Grid>

                <Grid container direction="row" paddingX={8} sx={{backgroundColor:"steelblue"}}>

                <Grid container xs={4} sx={{backgroundColor:"azure"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <Typography margin={5} align="left" variant="body1"> 
                        {project.about}
                    </Typography>
                </Grid>

                <Grid container xs={8} sx={{backgroundColor:"indigo"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">

                    slideshow goes here.

                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"indigo"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>

                        <ListSubheader sx={{
                            fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                        }}
                        >
                            Experiences
                        </ListSubheader>
                        <ListItem >Challenged because of some reasons</ListItem>
                        <ListItem>Liberated to work with no restrictions</ListItem>
                        </List>
                </Grid>

                <Grid container xs={6} sx={{backgroundColor:"azure"}}
                display="flex" direction="row" justifyContent="center" alignItems="center">
                    <List sx={{ listStyleType: 'disc' }}>
                        <ListSubheader sx={{
                            fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                        }}
                        >
                            Lessons Learned
                        </ListSubheader>
                        <ListItem >Double check your spelling</ListItem>
                        <ListItem>Your search may have been removed or is not yet in the system</ListItem>
                        </List>
                </Grid>
            
                <Grid container xs={6} sx={{backgroundColor:"azure"}} direction="column" justifyContent="center" alignItems="center">
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

                <Grid container xs={6} sx={{backgroundColor:"indigo"}} direction="column" justifyContent="center" alignItems="center">
                <List sx={{ listStyleType: 'disc' }}>
                    <ListSubheader sx={{
                        fontWeight: 700, lineHeight: '24px', fontSize: '16px', color: 'black'
                    }}
                    >
                                Contributions
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