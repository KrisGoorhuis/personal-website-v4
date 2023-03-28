import { Box, Typography, Button, Stack } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Translate } from "react-localize-redux"
import theme from "../../Theme/Main"
import { translationPaths } from "../../translations/translations"
import self from '../../assets/images/self.jpeg'
import placeholder from '../../assets/images/placeholder.jpg'
import '../../App.css'


const Head = () => {

   const handleCallOne = () => {
      const element = document.getElementById('scroll-target')
      element?.scrollIntoView()
   }

   const handleCallTwo = () => {
      window.open("https://github.com/KrisGoorhuis", '_blank')?.focus()
   }


   return (
      <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} maxWidth="lg">
         <Box sx={{ flexBasis: '70%', maxWidth: 700, maxHeight: 300 }}>
            <Typography
               component="h1"
               variant="h2"
               align="center"
               color={theme.gold.main}
            >
               <Translate id={translationPaths.splash.title} />
            </Typography>
            {/* <Typography variant="subtitle1" align="center" color={'white'} paragraph>
               <Translate id={translationPaths.splash.subtitle} />
            </Typography> */}
            <Typography variant="h4" align="center" color={'white'} paragraph>
               <Translate id={translationPaths.splash.description} />
            </Typography>
            {/* <Stack
               sx={{ pt: 4 }}
               direction="row"
               spacing={2}
               justifyContent="center"
            >
               <Button onClick={handleCallOne} color="primary" variant="contained">
                  <Translate id={translationPaths.splash.callOne} />
               </Button>
               <Button onClick={handleCallTwo} color="primary" variant="outlined">
                  <Translate id={translationPaths.splash.callTwo} />
               </Button>
            </Stack> */}
         </Box>


         {/* <Box className={"portrait"} sx={{ flexBasis: '20%', border: `5px solid ${theme.red.main}`, borderRadius: '50%', zIndex: 1 }}>
            <Box style={{ borderRadius: '50%', overflow: 'hidden', objectFit: 'contain', maxWidth: 400, borderColor: theme.gold.main, borderWidth: 5, zIndex: 2 }}>
               <LazyLoadImage
                  alt={`portrait`}
                  effect="blur"
                  src={self}
                  width='240px'
                  height='320px'
                  style={{ maxWidth: '100%', transform: 'scale(1.2)', top: 10, position: 'relative', left: 10 }}
                  placeholderSrc={placeholder}
               />
            </Box>

            <Box style={{
               width: '100%',
               height: '100%',
               borderRadius: '50%',
               position: 'relative',
               top: -305, left: 35,
               backgroundColor: theme.green.main,
               zIndex: -1
            }}>
            </Box>
         </Box> */}
      </Box>
   )
}

export default Head