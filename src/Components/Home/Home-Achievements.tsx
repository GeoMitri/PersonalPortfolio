import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import achievementCards from "./Home-AchievementCards";
import ActionItems from "./Home-ActionItems";

/**Section of text exploring my deets further*/
const Achievements = 
        <Grid container direction="column" xs={12}>
            <Box>
                <Typography variant="h2" gutterBottom color={"player1.main"}> 
                    Achievements
                </Typography>
                <Grid container
                    direction="row" justifyContent="center" alignItems="center"
                    columnGap={3}
                    rowGap={3}
                    //sx={{marginTop:2}}
                    >
                
                    {achievementCards}
                </Grid>
            </Box>
        </Grid>;
        // <Grid container direction="column" xs={12}>

        //     <Box marginTop={25}>
        //     <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
        //         <Grid container xs={3} sx={{minWidth:500}} direction="row" justifyContent="space-around" alignItems="center">
        //             <Button size="large" href="/Projects" variant="contained" color="player2">
        //                 <Typography color={"neutral.light"}>
        //                     Projects
        //                 </Typography>
        //             </Button>

        //             <Button size="large" variant="contained" color="player3">
        //                 <Typography color={"neutral.light"}>
        //                     Contact
        //                 </Typography>
        //             </Button>
        //         </Grid>
        //         </Grid>
        //     </Box>

        // </Grid>


export default Achievements;