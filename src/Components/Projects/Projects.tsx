import { useLayoutEffect, useState } from "react";
import { Box, Grid, Typography, } from "@mui/material";
import * as DATA from "../../Data/ProjectsData";
import * as TAGS from "../../Data/ProjectTagsData";
import { Tag, Project } from "../../Objects/Interfaces";
import ProjectCard from "./Projects-ProjectCard";
import FilterSelect from "./Projects-FilterSelect";
import useWindowDimensions from "../../Objects/windowDimensions";
import { useLocation } from "react-router-dom";


const myProjects : [string, Project][] = Object.entries(DATA); 
const myTags : Tag[] = Object.values(TAGS); 

/** Page for list all viewable projects
 * Filter via tags */
export const Projects = () => {
    
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    const [displayedProjects, setDisplayedProjects] = useState<[string, Project][] | null>(myProjects);
    const [activeTags, setActiveTags] = useState<Tag[] | null>(myTags);

    // Change displayed projects using activeTags
    const onFilterChange = (
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

        <Box bgcolor="neutral.light" sx={{display: 'flex', flexWrap: "nowrap"}}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="left" margin={3}>

                <Typography color={"neutral.dark"} variant="h1" fontWeight={"bold"} lineHeight={1.5} gutterBottom justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    PROJECTS
                </Typography>
                
                {/* fliter */}
                <FilterSelect tagsCollection={myTags} currentTags={activeTags} onChangeFunction={onFilterChange}/>

                {/* project list */}
                <Grid container direction="row" justifyContent="center" alignItems="flex-start"
                rowGap={{xs:10, md: 14}} columnGap={14} margin={3} sx={{minHeight:useWindowDimensions().height}}>
                    {displayedProjects?.map((project) => {if (project[1].tags.includes(TAGS.Favourite)) {return <ProjectCard projectRef={project}/>}})}
                    {displayedProjects?.map((project) => {if (!project[1].tags.includes(TAGS.Favourite)) {return <ProjectCard projectRef={project}/>}})}
                </Grid>

            </Grid>
        </Box>
    );
};