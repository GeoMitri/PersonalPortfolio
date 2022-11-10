import { Grid, Button, Typography } from "@mui/material";

/**Section of quick in-line interactables: 
 *  Projects
 *  CV
*/
const ActionItems = 
    <>
        <Grid container xs={12}
        direction="row" justifyContent="space-evenly" alignItems="center"
        sx={{}}>
            {/* <Typography>
            I make stuff!
            </Typography> */}
            <Button size="large" href="/Projects" variant="contained" color="player2">
                <Typography color={"neutral.light"}>
                    View Projects
                </Typography>
            </Button>

            {/* <Typography>
            I have a CV!
            </Typography> */}
            <Button size="large" variant="contained" color="player4">
                <Typography color={"neutral.light"}>
                    Download CV
                </Typography>
            </Button>


        </Grid>
        
    </>;

export default ActionItems;