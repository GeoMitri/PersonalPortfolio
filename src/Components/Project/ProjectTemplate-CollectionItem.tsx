import Card from '@mui/material/Card/Card';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import { ReactNode } from 'react';
import { ListFormat } from 'typescript';


interface CollectionItemProps{
  title : string,
  description : string,
  externalItems: ReactNode;
}
/*
Item for Collection-type projects
Replaces would-be buttons.
Populates Project -> ExternalItems
See ProjectsData.tsx for use
*/
function CollectionItem(props : CollectionItemProps) {
    return (
        <Card sx={{marginTop:7, marginX:1, width:"100%", border:5, borderRadius:5, backgroundColor:"neutral.light", borderColor:"player2.main"}}>
                <Grid item xs={12} marginTop={7} marginX={1} display="flex" alignItems={"center"} direction="column" >
                    <Typography sx={{ typography: { md: 'h4', xs: 'h3' } }} align="center" gutterBottom> 
                        {props.title}
                    </Typography>

                    <Grid container xs={12} sx={{backgroundColor:"neutral.light"}}
                    display="flex" direction="row" justifyContent="center" alignItems="center">
                        <Grid container xs={12} md={6} minWidth={{xs:0, md:800}} display="flex" direction="row" justifyContent="center" alignItems="center">
                            <Typography marginX={{xs:5, md:8}} marginY={5} marginBottom={12} align="left" variant="body1"> 
                                {props.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} marginBottom={7} alignItems={"center"} direction="row" justifyContent={"center"}>
                        {props.externalItems}
                    </Grid>
                </Grid>
        </Card>
    )
}

  export default CollectionItem;