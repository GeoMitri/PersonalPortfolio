import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button, Paper } from '@mui/material';
import { positions } from '@mui/system';
import YoutubeItem from './ProjectTemplate-YoutubeItem';
import { ReactNode } from "react";

interface ProjectCarouselProps {
    items : ReactNode[];
}

function ProjectCarousel(props : ProjectCarouselProps) {
    
    return(
    <Carousel
        NextIcon={<NavigateNextIcon/>}
        PrevIcon={<NavigateBeforeIcon/>}
        animation={"slide"}
        autoPlay={false}
        navButtonsAlwaysVisible
        indicatorContainerProps={{style:{marginTop:-5}}}
        //indicators={false}
        navButtonsWrapperProps={{style:{height:100, top:145}}}
        sx={{height:{xs:430/2,md:430}, width:{xs:640/2, md:640}, margin:3}}
        children={
            props.items
        }
        // <Box sx={{width:640, height:390}}>
    />
    )
}

export default ProjectCarousel