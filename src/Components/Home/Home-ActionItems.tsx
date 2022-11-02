import { Grid, Button, Typography } from "@mui/material";

/**Section of quick in-line interactables: 
 *  Projects
 *  CV
*/
const ActionItems = 
    <>
        <Grid container xs={12}
        direction="row" justifyContent="space-evenly" alignItems="center"
        sx={{backgroundColor:"tomato", flex:1}}>
            {/* <Typography>
            I make stuff!
            </Typography> */}
            <Button href="/Projects" sx={{backgroundColor:"thistle"}}>
                View Projects
            </Button>

            {/* <Typography>
            I have a CV!
            </Typography> */}
            <Button sx={{backgroundColor:"thistle"}}>
            Download CV
            </Button>


        </Grid>
        
    </>;

export default ActionItems;