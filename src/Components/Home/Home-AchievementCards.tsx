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
    <Card sx={{height: 135, width: 400}}>
            <CardHeader
                avatar={<StarIcon/>}
                title= {
                    <Typography variant="h5">
                        {achievement.key}
                    </Typography>                
                }
                />
            <CardContent>
                <Typography gutterBottom variant="body2" color="text.secondary">
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