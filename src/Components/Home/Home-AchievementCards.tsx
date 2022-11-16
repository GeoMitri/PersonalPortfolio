import { Button, CardHeader, Icon, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ACHIEVEMENTS from "../../Data/AchievementsData";
import StarIcon from '@mui/icons-material/Star';
/**List of cards for each achievement.
 * Feeds AcheivementData.tsx into sections
 * Placed into grid in Home.tsx  
 */
const achievementCards = ACHIEVEMENTS.map((achievement) =>
    <Card sx={{height: 135, width: 400, border:5, borderRadius:5, backgroundColor:"neutral.light", borderColor:"neutral.main"}}>
            <CardHeader
                avatar={<StarIcon sx={{color:"player1.main"}}/>}
                title= {
                    <Typography variant="h5" color="neutral.dark">
                        {achievement.key}
                    </Typography>                
                }
                />
            <CardContent sx={{marginTop:-2.5}}>
                <Typography gutterBottom variant="body2" color="neutral.main">
                    {achievement.desc}
                </Typography>
            </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
);

export default achievementCards;