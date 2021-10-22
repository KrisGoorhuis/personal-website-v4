import { Box, Typography, CardMedia } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Translate } from "react-localize-redux"
import theme from "../../Theme/Main"
import { translationPaths } from "../../translations/translations"
import self from '../../assets/images/photos/self.jpg'
import placeholder from '../../assets/images/photos/placeholder.jpg'


const Head = () => {


   return (
      <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} maxWidth="lg">
         <Box sx={{ flexBasis: '70%', maxWidth: 700 }}>
            <Typography
               component="h1"
               variant="h2"
               align="center"
               color={theme.gold.main}
               // gutterBottom
            >
               <Translate id={translationPaths.splash.title} />
            </Typography>
            <Typography variant="subtitle1" align="center" color={'white'} paragraph>
               <Translate id={translationPaths.splash.subtitle} />
            </Typography>
            <Typography variant="h4" align="center" color={'white'} paragraph>
               <Translate id={translationPaths.splash.description} />
            </Typography>
         </Box>


         <Box sx={{ flexBasis: '20%', border: `5px solid ${theme.red.main}`, borderRadius: '50%', zIndex: 1}}>
            <Box style={{ borderRadius: '50%', overflow: 'hidden', objectFit: 'contain', maxWidth: 400, borderColor: theme.gold.main, borderWidth: 5, zIndex: 2 }}>
               <LazyLoadImage
                  alt={`portrait`}
                  effect="blur"
                  src={self}
                  style={{ maxWidth: '100%', transform: 'scale(1.3)', top: 15, position: 'relative', left: -10 }}
                  placeholder={(
                     <CardMedia
                        component="img"
                        sx={{
                           // 16:9
                           pt: '56.25%',
                        }}
                        image={placeholder}
                        alt="lazy load placeholder"
                     />
                  )}
               />
            </Box>

            <Box style={{
               width: '100%',
               height: '100%',
               borderRadius: '50%',
               position: 'relative',
               top: -300, left: 50,
               backgroundColor: theme.green.main,
               zIndex: -1
            }}>
            </Box>
         </Box>
      </Box>
   )
}

export default Head