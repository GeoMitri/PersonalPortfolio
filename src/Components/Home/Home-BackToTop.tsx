import { Button } from "@mui/material";
import * as Scroll from "react-scroll";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useState } from "react";

interface BackToTopButtonProps{
    showThreshold: number;
}
function BackToTopButton(props:BackToTopButtonProps) {

    const [visiblePos, setvisiblePos] = useState<number>(-160);
    
    function updateVisible()
    {
        // console.log("sfsfd");
        var pos = window.scrollY >= props.showThreshold ? 0 : -160;
        setvisiblePos(pos)
    }

    window.addEventListener('scroll', updateVisible);

    return(
        <Button
        onClick={() => {Scroll.animateScroll.scrollToTop()}} 
        sx={{backgroundColor:"neutral.light", position:"fixed", bottom:20, right:visiblePos, width:160, height: 80}}>
            <KeyboardDoubleArrowUpIcon/>
        </Button>
    )
}

export default BackToTopButton;