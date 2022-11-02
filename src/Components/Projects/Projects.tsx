import { useState } from "react";
import { Box, Grid, } from "@mui/material";
import * as DATA from "../../Data/ProjectsData";
import * as TAGS from "../../Data/ProjectTagsData";
import { Tag, Project } from "../../Objects/Interfaces";
import ProjectCard from "./Projects-ProjectCard";
import FilterSelect from "./Projects-FilterSelect";

const myProjects : [string, Project][] = Object.entries(DATA); 
const myTags : Tag[] = Object.values(TAGS); 

/** Page for list all viewable projects
 * Filter via tags */
export const Projects = () => {
    
    const [displayedProjects, setDisplayedProjects] = useState<[string, Project][] | null>(myProjects);
    const [activeTags, setActiveTags] = useState<Tag[] | null>(myTags);

    // Change displayed projects using activeTags
    const onFilterChange = (
      event: React.MouseEvent<HTMLElement>,
      newTags: Tag[] | null,
    ) => {
        if(newTags !== null){
            setActiveTags(newTags);

            const newDisplayedProjects = myProjects.filter((project) => 
            project[1].tags.some((tag) => newTags?.includes(tag)));

            setDisplayedProjects(newDisplayedProjects);
        }
    };

    return (
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" margin={3}>
                
                {/* fliter */}
                <FilterSelect tagsCollection={myTags} currentTags={activeTags} onChangeFunction={onFilterChange}/>

                {/* project list */}
                <Grid container direction="row" justifyContent="center" alignItems="center"
                rowGap={4} columnGap={8} margin={3} sx={{ backgroundColor:"magenta" }}>

                    {displayedProjects?.map((project) => <ProjectCard projectRef={project}/>)}
                    
                </Grid>

            </Grid>
        </Box>
    );
};