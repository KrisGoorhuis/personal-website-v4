import { Copyright } from '@mui/icons-material'
import { Box, Container, Typography, Stack, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import { LocalizeContextProps, Translate, withLocalize } from 'react-localize-redux'
import ApplicationBar from './components/ApplicationBar'
import ProjectCard from './components/ProjectCard/ProjectCard';



interface AppProps extends LocalizeContextProps {

}

function App(props: AppProps) {

  const Projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  return (
    <ApplicationBar>
      {/* <CssBaseline /> Necessary? */}

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Kris Goorhuis Title
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Front End Web Developer | Hobbyist Native Developer | Freelance Writer | Estranged Coffee Lover
            </Typography>
            <Typography variant="h4" align="center" color="text.secondary" paragraph>
              When not developing, I'm coming up with descriptions for hobby and learning projects. Read a neat description of them and view a few below.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Projects.map((project) => <ProjectCard project={project} />)}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      <Translate id={"stuff.common"}></Translate>
    </ApplicationBar>
  )
}

export default withLocalize(App)
