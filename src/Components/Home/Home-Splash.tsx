import { Typography, Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import useWindowDimensions from "../../Objects/windowDimensions";

/**First eye-catching cover section of Home */
const Splash = 
    <>
        <Grid container direction="column" justifyContent="center" alignItems="baseline" xs={7} sx={{marginTop:18}}>
            <Typography variant="h4" color={"neutral.dark"}> 
            Hi! I'm
            </Typography>
            <Typography variant="h1" fontWeight={"bold"} lineHeight={1.5} color={"neutral.dark"}> 
            George Mitri
            </Typography>
            <Typography variant="h3" gutterBottom color={"neutral.dark"}> 
            Engineer of Fun
            </Typography>
            <Typography variant="subtitle1" color={"neutral.dark"}> 
            Game Designer | Unity Developer
            </Typography>
        </Grid>

        <Grid container xs={5} sx={{marginTop:18}}
        direction="row" justifyContent="center" alignItems="center">
            <CardMedia 
            component="img"
            image="me_portrait.jpg"
            alt="George's Portrait"
            sx={{maxWidth:400, borderRadius:'5%'}}
            />
        </Grid>
    </>;

export default Splash;