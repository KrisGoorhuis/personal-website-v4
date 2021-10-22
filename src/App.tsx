import { Box, Button, Container, Grid, Stack } from '@mui/material'
import { LocalizeContextProps, withLocalize } from 'react-localize-redux'
import ApplicationBar from './components/ApplicationBar'
import Footer from './components/Footer/Footer'
import Head from './components/Head/Head'
import ProjectCard from './components/ProjectCards/ProjectCard'
import { CorporateProject, Projects } from './projects'
import theme from './Theme/Main'



interface AppProps extends LocalizeContextProps {

}

function App(props: AppProps) {


  return (
    <ApplicationBar>

      <main style={{ background: theme.black.light, zIndex: -2, paddingTop: 175 }}>
        <Box sx={{ pt: 8, pb: 6, justifyContent: 'center', width: '100%', marginBottom: 15 }} >
          <Head />
        </Box>

        {/* <Container sx={{ py: 8 }} maxWidth="lg"> */}
        <Container id="scroll-target" sx={{ py: 8, backgroundColor: theme.black.dark, width: '100%', maxWidth: '100% !important', margin: 0 }} >

          <ProjectCard isWide project={CorporateProject} />
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
