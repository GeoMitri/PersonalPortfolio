import { Tag } from "../Objects/Interfaces";
//Icons
import StorefrontIcon from '@mui/icons-material/Storefront';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export const Serious : Tag = {
    name: "Serious Game",
    icon: <PsychologyIcon/> 
};

export const Shipped : Tag = {
    name: "Shipped",
    icon: <StorefrontIcon/> 
};

export const Playable : Tag = {
    name: "Playable",
    icon: <SportsEsportsIcon/>
};

export const NonGame : Tag = {
    name: "Non-Game",
    icon: <SportsEsportsIcon/>
};

// const PROJECT_TAGS = {
//     Serious, Shipped, Playable, NonGame
// }

