import { Grid, Button, Typography } from "@mui/material";

/**Section of quick in-line interactables: 
 *  Projects
 *  CV
*/
const ActionItems = 
    <>
        <Grid container xs={12}
        direction="row" justifyContent="space-evenly" alignItems="center"
        sx={{backgroundColor:"tomato"}}>
            {/* <Typography>
            I make stuff!
            </Typography> */}
            <Button size="large" href="/Projects" sx={{backgroundColor:"thistle"}}>
                View Projects
            </Button>

            {/* <Typography>
            I have a CV!
            </Typography> */}
            <Button size="large" sx={{backgroundColor:"thistle"}}>
            Download CV
            </Button>


        </Grid>
        
    </>;

export default ActionItems;