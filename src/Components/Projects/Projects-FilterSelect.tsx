import { Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Tag } from "../../Objects/Interfaces";
import { styled } from "@mui/material/styles";
import { ReactNode, useState } from "react";
import { Button } from "react-scroll";
import { getThemeProps } from "@mui/system";
import { useTheme } from "@mui/material/styles";

/** UI for modifying activeTags
 * Used in Projects.tsx to filter displayed projects
 * Requires tags, modifies activeTags, calls onFilterChange
 */
const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: theme.palette.neutral.light,
      backgroundColor: theme.palette.player2.main
    }
}));

interface FilterSelectProps {
    tagsCollection : Tag[], 
    currentTags : (Tag[] | null), 
    onChangeFunction : any
}



function FilterSelect(props : FilterSelectProps) {
    
    const [tagLabel, setTagLabel] = useState("all");

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newTagsName: string,
        ) => {
        if (newTagsName !== null) {
            setTagLabel(newTagsName);
            if(newTagsName === "all"){
                props.onChangeFunction(props.tagsCollection);
            }
            else props.onChangeFunction(TagByName(newTagsName));
        }
        };

    function TagByName(name : string){
        var tags : Tag[] = [];
        props.tagsCollection.map((tag) => {
            if(tag.name === name){
                tags = [tag];
            }
            return null;
        })
        return tags;
    }

    return(<>
        {/* Debug selection */}
        {/* <Grid item xs={12} sx={{backgroundColor:"aliceblue"}}>
            {props.currentTags?.map((tag) => tag.name)}
        </Grid> */}


        <Grid item xs={12}>
            <ToggleButtonGroup
            value={tagLabel}
            onChange={handleChange}
            exclusive
            aria-label="tag-filters"
            sx={{display:{xs:"inherit", md:"none"}}}>
                
                <StyledToggleButton value={"all"} aria-label="all">
                    <Typography variant="h5">
                        All
                    </Typography>
                </StyledToggleButton>
                
                {props.tagsCollection.map((tag) =>
                    {if(tag.name.toLowerCase() !== "PLAYABLE".toLowerCase() ) return(
                        <StyledToggleButton value={tag.name} aria-label={tag.name}>
                            <Typography variant="h5">
                            {tag.name}
                            </Typography>
                        </StyledToggleButton>
                    )}
                )}

            </ToggleButtonGroup>
            <ToggleButtonGroup
            value={tagLabel}
            onChange={handleChange}
            exclusive
            aria-label="tag-filters"
            sx={{display:{xs:"none", md:"inherit"}}}>
                
                <StyledToggleButton value={"all"} aria-label="all">
                    <Typography variant="h5">
                        All
                    </Typography>
                </StyledToggleButton>
                
                {props.tagsCollection.map((tag) =>
                        <StyledToggleButton value={tag.name} aria-label={tag.name}>
                            <Typography variant="h5">
                            {tag.name}
                            </Typography>
                        </StyledToggleButton>
                )}

            </ToggleButtonGroup>
        </Grid>
    </>)
}

export default FilterSelect;