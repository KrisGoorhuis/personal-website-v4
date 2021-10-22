import React from "react"
import MasonryItem from "@mui/lab/MasonryItem"
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Collapse } from "@mui/material"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Project } from "../../model"



interface ProjectCardProps {
   project: Project
   isWide?: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
   const [hovered, setHovered] = React.useState<boolean>(false)

   return (
      <MasonryItem
         key={JSON.stringify(props.project)}
         onMouseOver={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
      >
         <Card
            sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', transition: '.3s' }}
         >
            <LazyLoadImage
               alt={`Project preview for ${props.project.name}`}
               effect="blur"
               src={props.project.imageLarge}
               style={{ width: '100%' }}
               placeholder={(
                  <CardMedia
                     component="img"
                     sx={{
                        // 16:9
                        width: '100%',
                        pt: '56.25%',
                     }}
                     image={props.project.imageSmall}
                     alt="lazy load placeholder"
                  />
               )}
            />
            <CardContent
               sx={{ flexGrow: 1 }}
            >
               <Collapse in={hovered}>
                  <Typography gutterBottom variant="h5" component="h2">
                     Heading
                  </Typography>
                  <Typography>
                     This is a media card. You can use this section to describe the
                     content.
                  </Typography>
                  <CardActions>
                     <Button size="small">View</Button>
                     <Button size="small">Edit</Button>
                  </CardActions>
               </Collapse>
            </CardContent>
         </Card>
      </MasonryItem>
   )
}

export default ProjectCard