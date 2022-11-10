import { Button } from "@mui/material";
import * as Scroll from "react-scroll";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

interface NextSectionButtonProps{
    elementID:string
}

function NextSectionButton(props:NextSectionButtonProps) { 
    return(
        <Button 
        onClick={() => {Scroll.animateScroll.scrollTo(document.getElementById(props.elementID)!.offsetTop-70)}} 
        sx={{backgroundColor:"neutral.light", position: 'absolute', bottom: 20, width:100, height: 80}}>
            <KeyboardDoubleArrowDownIcon/>
        </Button>
    )
}

export default NextSectionButton;