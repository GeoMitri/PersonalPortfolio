import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Tag } from "../../Objects/Interfaces";


/** UI for modifying activeTags
 * Used in Projects.tsx to filter displayed projects
 * Requires tags, modifies activeTags, calls onFilterChange
 */
interface FilterSelectProps {
    tagsCollection : Tag[], 
    currentTags : (Tag[] | null), 
    onChangeFunction : any
}

function FilterSelect(props : FilterSelectProps) {
    return(<>
        {/* Debug selection */}
        {/* <Grid item xs={12} sx={{backgroundColor:"aliceblue"}}>
            {activeTags?.map((tag) => tag.name)}
        </Grid> */}

        <Grid item xs={12} sx={{backgroundColor:"blanchedalmond"}}>
            <ToggleButtonGroup
            value={props.currentTags}
            onChange={props.onChangeFunction}
            exclusive
            aria-label="tag-filters">
                <ToggleButton value={props.tagsCollection} aria-label="all">
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