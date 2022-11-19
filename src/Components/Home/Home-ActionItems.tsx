import { Grid, Button, Typography } from "@mui/material";
import * as Scroll from "react-scroll";


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
            <Button size="large" 
            onClick={() => {Scroll.animateScroll.scrollTo(document.getElementById("missions")!.offsetTop-70)}}
            variant="outlined" color="player1">
                <Typography color={"player1.main"}>
                    Learn More
                </Typography>
            </Button>


        </Grid>
        
    </>;

export default ActionItems;