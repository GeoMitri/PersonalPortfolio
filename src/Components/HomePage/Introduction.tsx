import { Box, Button, Paper, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


export const Introduction = () => {
    return (
            <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
                    <Grid 
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    margin={1}
                    >
                        <Grid item xs={7} sx={{backgroundColor:"blanchedalmond"}}>
                            <Typography variant="h1"> 
                            Hi!
                            </Typography>
                            <Typography variant="h2"> 
                            I'm George Mitri
                            </Typography>
                            <Typography variant="h4"> 
                            Engineer of Fun
                            </Typography>
                            <Typography variant="h6"> 
                            Game Developer | Game Designer
                            </Typography>
                        </Grid>
                        <Grid container xs={5} sx={{backgroundColor:"azure"}}
                        direction="row" justifyContent="center" alignItems="center">
                            <CardMedia 
                            component="img"
                            image="me_portrait.jpg"
                            alt="George's Portrait"
                            sx={{maxWidth:400}}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{backgroundColor:"tomato", textAlign: "center"}}>
                            <Typography>
                                I make stuff!
                            </Typography>
                            <Button sx={{backgroundColor:"thistle"}}>
                                View Projects
                            </Button>
                        </Grid>
                        <Grid item xs sx={{backgroundColor:"turquoise"}}>
                            <Typography variant="h2"> 
                                What is it this boy can do?
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography>   
                    </Typography>
            </Box>
    );
};