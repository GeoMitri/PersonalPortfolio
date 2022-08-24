import { Box, Button, Paper, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const achievements = [{"name":"test1"},{"name":"test2"},{"name":"test3"}];
// const listItems = achievements.map((a) => <li key={a.name}>{a.name}</li>);

const myAchievements = [
    ["Officially Qualified","Graduate with a Bachelor of Science in Games Development."],
    ["Mathematical!","Recieve the Best Student Research Games Project Award for the educational game project GridBlade."],
    ["Sole Developer","Ship and commercialise the puzzle game Stepping Stones on Android and iOS platforms in a solo team."],
    ["Serious about Fun","Design and Develop 5 Serious Game projects."],
    ["Unified","Develop games and interactive software using Unity3D for 8+ years."],
    ["Learning Complete","Understand everything there is to know about game design and development"],
    // ["Partied Up","Work on a serious game in a team of other experienced game designers or game developers"],
    // ["Unreal Possibilities","Develop a game using Unreal."],
]
const achievementCards = myAchievements.map((achievement) =>
    <Card sx={{height: 175, width: 400}}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {achievement[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {achievement[1]}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

export const Introduction = () => {
    return (
            <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" margin={1}>
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
                        <Grid item xs={12} sx={{backgroundColor:"turquoise"}}>
                            <Typography variant="h3"> 
                                I make games that do good.
                            </Typography>
                            <Typography variant="h5"> 
                                Or at least, that's my mission.
                            </Typography>
                            <Typography variant="body1"> 
                                I make games that do good in this world.
                            </Typography>
                            <Typography variant="h3">
                                Why games?
                            </Typography>
                            <Typography variant="h4"> 
                                1. Games are fun
                            </Typography>
                            <Typography variant="h4"> 
                                2. Games are good teachers
                            </Typography>
                            <Typography variant="h4"> 
                                3. Games are social
                            </Typography>
                        </Grid>
                        <Grid item xs sx={{backgroundColor:"steelblue"}}>
                            <Typography variant="h3"> 
                                My Achievements
                            </Typography>
                            <Grid container
                            direction="row" justifyContent="center" alignItems="center"
                            rowGap={1}
                            columnGap={1}
                            sx={{ backgroundColor:"magenta" }}>
                            {achievementCards}
                            </Grid>
                        </Grid>
                    </Grid>
            </Box>
    );
};