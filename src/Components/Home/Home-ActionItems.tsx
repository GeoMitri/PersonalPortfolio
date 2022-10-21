import { Grid, Button, Typography } from "@mui/material";

const actionItems = 
    <>
        <Grid container xs={12}
        direction="row" justifyContent="center" alignItems="center"
        sx={{backgroundColor:"tomato", textAlign: "center"}}>

            <Grid item xs={2} sx={{backgroundColor:"aliceblue"}}>
                <Typography>
                {/* I make stuff! */}
                </Typography>
                <Button href="/Projects" sx={{backgroundColor:"thistle"}}>
                View Projects
                </Button>
            </Grid>

            <Grid item xs={2} sx={{backgroundColor:"springgreen"}}>
                <Typography>
                {/* I have a CV! */}
                </Typography>
                <Button sx={{backgroundColor:"thistle"}}>
                Download CV
                </Button>
            </Grid>

        </Grid>
    </>;

export default actionItems;