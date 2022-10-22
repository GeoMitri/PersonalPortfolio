import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Tag } from "../../Objects/Interfaces";


/** UI for modifying activeTags
 * Used in Projects.tsx to filter displayed projects
 * Requires tags, modifies activeTags, calls onFilterChange
 */
function FilterSelect(myTags : Tag[], activeTags : (Tag[] | null), onFilterChange : any) {
    return(<>
        {/* Debug selection */}
        {/* <Grid item xs={12} sx={{backgroundColor:"aliceblue"}}>
            {activeTags?.map((tag) => tag.name)}
        </Grid> */}

        <Grid item xs={12} sx={{backgroundColor:"blanchedalmond"}}>
            <ToggleButtonGroup
            value={activeTags}
            onChange={onFilterChange}
            exclusive
            aria-label="tag-filters">
                <ToggleButton value={myTags} aria-label="all">
                    All
                </ToggleButton>
                {myTags.map((tag) =>
                    <ToggleButton value={[tag]} aria-label={tag.name}>
                        {tag.name}
                    </ToggleButton>
                )}
            </ToggleButtonGroup>
        </Grid>
    </>)
}

export default FilterSelect;