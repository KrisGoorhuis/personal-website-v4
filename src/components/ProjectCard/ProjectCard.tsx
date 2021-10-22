import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Project } from "../../model"



interface ProjectCardProps {
   project: Project
}

const ProjectCard = (props: ProjectCardProps) => {

   return (
      <Grid item key={JSON.stringify(props.project)} xs={12} sm={6} md={4}>
         <Card
            sx={{ height: '300px', width: '250px', display: 'flex', flexDirection: 'column', margin: 'auto' }}
         >
            <LazyLoadImage
               alt={`Project preview for ${props.project.name}`}
               effect="blur"
               src={props.project.imageLarge}
               placeholder={(
                  <CardMedia
                     component="img"
                     sx={{
                        // 16:9
                        pt: '56.25%',
                     }}
                     image={props.project.imageSmall}
                     alt="lazy load placeholder"
                  />
               )}
            />
            {/* <CardMedia
               component="img"
               sx={{
                  // 16:9
                  pt: '56.25%',
               }}
               image="https://source.unsplash.com/random"
               alt="random"
            /> */}
            <CardContent sx={{ flexGrow: 1 }}>
               <Typography gutterBottom variant="h5" component="h2">
                  Heading
               </Typography>
               <Typography>
                  This is a media card. You can use this section to describe the
                  content.
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">View</Button>
               <Button size="small">Edit</Button>
            </CardActions>
         </Card>
      </Grid>
   )
}

export default ProjectCard