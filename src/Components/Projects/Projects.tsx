import { useState } from "react";
import { Box, Grid, } from "@mui/material";
import * as DATA from "../../Data/ProjectsData";
import * as TAGS from "../../Data/ProjectTagsData";
import { Tag, Project } from "../../Objects/Interfaces";
import ProjectCard from "./Projects-ProjectCard";
import FilterSelect from "./Projects-FilterSelect";

const myProjects : Project[] = Object.values(DATA); 
const myTags : Tag[] = Object.values(TAGS); 

// const styles = {
//     media: {
//        height: 0,
//        paddingTop: '56.25%' // 16:9
//     },
//     card: {
//        position: 'relative',
//     },
//     overlay: {
//        position: 'absolute',
//        top: '20px',
//        left: '20px',
//        color: 'black',
//        backgroundColor: 'white'
//     }
// }

/** Page for list all viewable projects
 * Filter via tags */
export const Projects = () => {
    
    const [displayedProjects, setDisplayedProjects] = useState<Project[] | null>(myProjects);
    const [activeTags, setActiveTags] = useState<Tag[] | null>(myTags);

    // Change displayed projects using activeTags
    const onFilterChange = (
      event: React.MouseEvent<HTMLElement>,
      newTags: Tag[] | null,
    ) => {
        if(newTags !== null){
            setActiveTags(newTags);
            // console.log(activeTags);
    
            const newDisplayedProjects = myProjects.filter((project) => 
                project.tags.some((tag) => newTags?.includes(tag)));
                    
            setDisplayedProjects(newDisplayedProjects);            
        }
    };
  
    return (
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" margin={3}>
                
                {/* fliter */}
                {FilterSelect(myTags, activeTags, onFilterChange)}

                {/* project list */}
                <Grid container direction="row" justifyContent="center" alignItems="center"
                rowGap={4} columnGap={8} margin={3} sx={{ backgroundColor:"magenta" }}>

                    {displayedProjects?.map((project) => ProjectCard(project))}

                </Grid>

            </Grid>
        </Box>
    );
};