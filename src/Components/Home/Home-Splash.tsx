import { Typography, Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

const splash = 
    <>
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
    </>;

export default splash;