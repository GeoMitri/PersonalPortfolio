import { useState } from "react";
import { Project } from "../../Objects/Interfaces";
import { Card, CardContent, CardMedia, Chip, Icon, Typography} from "@mui/material";

/** Displayable card per project 
 * Iterated over in Projects.tsx*/
function ProjectCard(project:Project) { 
    
    const [color, setColor] = useState("Aquamarine");

    return(
        <Card key={project.name} sx={{position: 'relative', height: 400, minWidth: 400, backgroundColor: "DarkSlateBlue"}}
            onMouseOver={() => setColor("Turquoise")}
            onMouseOut={() => setColor("Aquamarine")}
        >


                <CardMedia
                    component="img"
                    image={project.backgroundImage}
                    alt="test"
                    sx={{position: 'absolute', minHeight: 300, minWidth: 400}}
                />

                <CardContent sx={{position: 'absolute', bottom: 0, width: '100%', backgroundColor: color}}>
                    <Typography>
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {project.name}
                    </Typography>
                    {project.tags.map((tag) => 
                        <Chip key={tag.name} icon={<Icon>{tag.icon}</Icon>} label={tag.name} />
                        )}
                    <Typography paddingTop={2} variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>

        </Card>

)}

export default ProjectCard;

// <Card sx={{height: 400, minWidth: 400, backgroundImage: {myImage}}}>
//     <CardActionArea sx={{position:"relative", height:"100%", width: "100%"}}>
//         <CardMedia
//             component="img"
//             image={myImage}
//             alt="test"
//             sx={{height:"100%", width: "100%"}}
//             />
//         <CardContent sx={{position:"absolute", bottom: 0, left: 0, width: "100%"}}>
//             <Typography sx={{position:"absolute"}} variant="body2" color="text.secondary">    
//             </Typography>
//         </CardContent>
//     </CardActionArea>
// </Card>

// <Card sx={styles.card}>
// <CardMedia image={myImage} style={styles.media}/>
//     <Typography sx={styles.overlay} variant="body2" color="text.secondary">
//         asdfhasjfksjdfkajsh
//     </Typography>
// </Card>