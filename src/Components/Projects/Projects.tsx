import { ReactNode, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Icon,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
//Icons
import StorefrontIcon from "@mui/icons-material/Storefront";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { debug } from "console";
import { ListFormat } from "typescript";
import { Description } from "@mui/icons-material";

interface Tag {
  name: string;
  icon: ReactNode;
}

const Serious: Tag = {
  name: "Serious Game",
  icon: <PsychologyIcon />,
};

const Shipped: Tag = {
  name: "Shipped",
  icon: <StorefrontIcon />,
};

interface Project {
  name: string;
  description: string;
  tags: Tag[];
}

const GridBlade: Project = {
  name: "GridBlade",
  description: "This is Grid Blade",
  tags: [Serious],
};

const SteppingStones: Project = {
  name: "Stepping Stones",
  description: "This is Stepping Stones",
  tags: [Shipped],
};

const myProjects = [GridBlade, SteppingStones];
const myTags = [Serious, Shipped];

// const projectCards = myProjects.map((project) =>
//     <Card sx={{height: 300, minWidth: 800 }}>
//         <CardContent>
//             <Typography>
//             </Typography>
//             <Typography gutterBottom variant="h5" component="div">
//                 {project.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//                 {project.description}
//             </Typography>
//                 {project.tags.map((tag) =>
//                     <Chip icon={<Icon>{tag.icon}</Icon>} label={tag.name} />
//                 )}
//         </CardContent>
//     </Card>
// );

export const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[] | null>(
    myProjects
  );
  const [activeTags, setActiveTags] = useState<Tag[] | null>(myTags);

  const onFilterChange = (
    event: React.MouseEvent<HTMLElement>,
    newTags: Tag[] | null
  ) => {
    if (newTags !== null) {
      setActiveTags(newTags);
      // console.log(activeTags);

      const newDisplayedProjects = myProjects.filter((project) =>
        project.tags.some((tag) => newTags?.includes(tag))
      );

      setDisplayedProjects(newDisplayedProjects);
    }
  };

  return (
    <Box bgcolor="secondary.main" sx={{ display: "flex", flexWrap: "nowrap" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="left"
        margin={3}
      >
        <Grid item xs={12} sx={{ backgroundColor: "aliceblue" }}>
          {activeTags?.map((tag) => tag.name)}
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "blanchedalmond" }}>
          <ToggleButtonGroup
            value={activeTags}
            onChange={onFilterChange}
            exclusive
            aria-label="tag-filter"
          >
            <ToggleButton value={myTags} aria-label="all">
              All
            </ToggleButton>
            <ToggleButton value={[Serious]} aria-label="serious">
              Serious Games
            </ToggleButton>
            <ToggleButton value={[Shipped]} aria-label="serious">
              Shipped
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowGap={4}
          columnGap={8}
          margin={3}
          sx={{ backgroundColor: "magenta" }}
        >
          {displayedProjects?.map((project) => (
            <Card key={project.name} sx={{ height: 300, minWidth: 800 }}>
              <CardContent>
                <Typography></Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag.name}
                    icon={<Icon>{tag.icon}</Icon>}
                    label={tag.name}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
