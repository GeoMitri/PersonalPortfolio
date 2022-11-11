import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, Paper } from '@mui/material';

interface ProjectCarouselProps {

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
    //indicators={false}
    sx={{width:500, height:400, backgroundColor:"red"}}
    >
        {items.map( (item, i) => <Item key={i} item={item} /> )}
    </Carousel>
    )
}

export default ProjectCarousel


function Item(props : any)
{
    return (
        <Paper sx={{flex:1}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}