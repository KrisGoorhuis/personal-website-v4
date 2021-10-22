import { Box, Container, Grid } from '@mui/material'
import { LocalizeContextProps, withLocalize } from 'react-localize-redux'
import ApplicationBar from './components/ApplicationBar'
import Footer from './components/Footer/Footer'
import Head from './components/Head/Head'
import ProjectCard from './components/ProjectCard/ProjectCard'
import { Projects } from './projects'
import theme from './Theme/Main'



interface AppProps extends LocalizeContextProps {

}

function App(props: AppProps) {

  return (
    <ApplicationBar >

      <main style={{background: theme.black.light, zIndex: -2, paddingTop: 150}}>
        <Box sx={{ pt: 8, pb: 6, justifyContent: 'center', width: '100%'}} >
          <Head />
        </Box>

        {/* <Container sx={{ py: 8 }} maxWidth="lg"> */}
        <Container sx={{ py: 8 }} >
          <Grid container spacing={4}>
            {
              Projects.map((project) => <ProjectCard project={project} />)
            }
          </Grid>
        </Container>
      </main>

      <Footer />

    </ApplicationBar>
  )
}

export default withLocalize(App)
