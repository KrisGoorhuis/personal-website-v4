import React from "react"
import MasonryItem from "@mui/lab/MasonryItem"
import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Project } from "../../model"
import { translationPaths } from "../../translations/translations"
import { Translate } from "react-localize-redux"
import theme from "../../Theme/Main"


interface ProjectCardProps {
   project: Project
   isBig?: boolean
}

const ProjectCard = (props: ProjectCardProps) => {
   const [hovered, setHovered] = React.useState<boolean>(false)

   const handleOpenLive = () => {
      if (props.project.liveLink) {
         window.open(props.project.liveLink, '_blank')?.focus()
      }
   }

   const handleOpenGithub = () => {
      if (props.project.githubLink) {
         window.open(props.project.githubLink, '_blank')?.focus()
      }
   }

   return (
      <MasonryItem
         key={JSON.stringify(props.project)}
         onMouseOver={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
      >
         <Card
            sx={{
               display: 'flex',
               flexDirection: 'column',
               margin: 'auto',
               transition: '.3s',
               position: 'relative',
               maxHeight: 300,
               marginBottom: '20px',
            }}
         >
            <LazyLoadImage
               alt={`Project preview for ${props.project.name}`}
               effect="blur"
               src={props.project.imageLarge}
               style={{
                  width: '100%',
                  transform: hovered ? 'scale(1.1)' : 'scale(1.05)',
                  transition: '.3s',
                  marginBottom: -5,
                  height: '100%'
               }}
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
               sx={{
                  flexGrow: 1,
                  position: 'absolute',
                  opacity: hovered ? '1' : '0',
                  transition: '.3s',
                  backgroundColor: 'rgba(0, 0, 0, .7)',
                  height: '100%',
                  width: '100%',
                  color: 'white',
               }}
            >
               <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90%', flexShrink: 1 }}>
                  <div>
                     <Typography gutterBottom variant={props.isBig ? "h4" : "h5"} component="h2" style={{color: theme.gold.main}}>
                        <Translate id={props.project.name} />
                     </Typography>
                     <Typography className={"projectFont"} style={{ width: '90%', fontSize: props.isBig ? 16 : 12, minWidth: '300px', textOverflow: 'ellipsis' }}>
                        <Translate id={props.project.description} />
                     </Typography>
                     {
                        props.project.descriptionTwo &&
                        <Typography className={"projectFont"} style={{ width: '90%', fontSize: props.isBig ? 16 : 12, minWidth: '300px', textOverflow: 'ellipsis', marginTop: 20 }}>
                           <Translate id={props.project.descriptionTwo} />
                        </Typography>
                     }
                  </div>

                  <CardActions>
                     {
                        !props.isBig && props.project.liveLink &&
                        <Button
                           variant="outlined"
                           size="small"
                           onClick={handleOpenLive}
                        >
                           <Translate id={translationPaths.projects.buttons.viewLive} />
                        </Button>
                     }
                     {
                        !props.isBig && props.project.githubLink &&
                        < Button
                           variant="outlined"
                           size="small"
                           onClick={handleOpenGithub}
                        >
                           <Translate id={translationPaths.projects.buttons.viewCode} />
                        </Button>
                     }
                  </CardActions>

               </div>

            </CardContent>
         </Card>
      </MasonryItem>
   )
}

export default ProjectCard