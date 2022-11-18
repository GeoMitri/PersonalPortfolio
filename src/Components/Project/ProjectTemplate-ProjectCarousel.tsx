import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button, Paper } from '@mui/material';
import { positions } from '@mui/system';
import YoutubeItem from '../../PlayAround/YoutubeTesting';
import { ReactNode } from "react";

interface ProjectCarouselProps {
    items : ReactNode[] | null;
}

function ProjectCarousel(props : ProjectCarouselProps) {
    
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return(
    <Carousel
    NextIcon={<NavigateNextIcon/>}
    PrevIcon={<NavigateBeforeIcon/>}
    animation={"slide"}
    autoPlay={false}
    navButtonsAlwaysVisible
    height={430}
    indicatorContainerProps={{style:{marginTop:-20}}}
    //indicators={false}
    navButtonsWrapperProps={{style:{height:100, top:145}}}
    sx={{width:640, margin:3}}
    >

        {props.items}
        <YoutubeItem videoID="-C-2AqRD8io"/>
        <YoutubeItem videoID="-C-2AqRD8io"/>
        <Box sx={{width:640, height:390}}>
            test
        </Box>
    </Carousel>
    )
}

export default ProjectCarousel


function Item(props : any)
{
    return (
        <Box sx={{width:640, height:390}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Box>
    )
}