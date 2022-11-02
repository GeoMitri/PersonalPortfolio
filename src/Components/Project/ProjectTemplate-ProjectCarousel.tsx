import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ProjectCarouselProps {

}

function ProjectCarousel(props : ProjectCarouselProps) {
    <Carousel
        NextIcon={<NavigateBeforeIcon/>}
        PrevIcon={<NavigateNextIcon/>}
        animation={"slide"}
    >

    </Carousel>
}

export default ProjectCarousel