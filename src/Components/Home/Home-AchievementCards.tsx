import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ACHIEVEMENTS from "../../Data/AchievementsData";


const achievementCards = ACHIEVEMENTS.map((achievement) =>
    <Card sx={{height: 175, width: 400}}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {achievement.key}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {achievement.desc}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

export default achievementCards;