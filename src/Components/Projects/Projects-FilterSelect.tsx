import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
      color: "white",
      backgroundColor: theme.palette.player2.main
    }
  }));

interface FilterSelectProps {
    tagsCollection : Tag[], 
    currentTags : (Tag[] | null), 
    onChangeFunction : any
}



function FilterSelect(props : FilterSelectProps) {
    
    // const [visualedButton, setVisualedButton] = useState<Element | null>(document.querySelector('[aria-label="all"]'));



    // const themeGet = useTheme();
    
    // function setColoured(label : string){
    //     const col : string = themeGet.palette.player2.main; 
    //     const defCol : string = ""; 
        
    //     visualedButton?.setAttribute('style', 'background:' + defCol + ';');
        
    //     setVisualedButton(document.querySelector('[aria-label="' + label + '"]'));
        
    //     visualedButton?.setAttribute('style', 'background:' + col + ';');
        
    //     //console.log(document.querySelector('[aria-label="' + label + '"]')?.setAttribute('style', 'background:' + defCol + ';'));
    // }
    

    return(<>
        {/* Debug selection */}
        {/* <Grid item xs={12} sx={{backgroundColor:"aliceblue"}}>
            {props.currentTags?.map((tag) => tag.name)}
        </Grid> */}


        <Grid item xs={12}>
            <ToggleButtonGroup
            value={props.currentTags}
            onChange={props.onChangeFunction}
            exclusive
            aria-label="tag-filters">
                <ToggleButton value={props.tagsCollection} onChange={(e) => {console.log(e)}} aria-label="all">
                    All
                </ToggleButton>
                {props.tagsCollection.map((tag) =>
                    <ToggleButton value={[tag]} aria-label={tag.name}>
                        {tag.name}
                    </ToggleButton>
                )}
            </ToggleButtonGroup>
        </Grid>
    </>)
}

export default FilterSelect;