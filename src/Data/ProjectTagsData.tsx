import { Tag } from "../Objects/Interfaces";
//Icons
import StorefrontIcon from '@mui/icons-material/Storefront';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AppsIcon from '@mui/icons-material/Apps';

export const Serious : Tag = {
    name: "Serious Game",
    icon: <PsychologyIcon/> 
};

export const Commercial : Tag = {
    name: "Commercial",
    icon: <StorefrontIcon/> 
};

export const Playable : Tag = {
    name: "Playable",
    icon: <SportsEsportsIcon/>
};

export const NonGame : Tag = {
    name: "Non-Game",
    icon: <AppsIcon/>
};

export const ForFun : Tag = {
    name: "For Fun",
    icon: <SentimentVerySatisfiedIcon/>
};

// const PROJECT_TAGS = {
//     Serious, Shipped, Playable, NonGame
// }

