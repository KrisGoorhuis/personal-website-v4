import { Box, Container } from '@mui/material'
import { LocalizeContextProps, withLocalize } from 'react-localize-redux'
import ApplicationBar from './components/ApplicationBar'
// import Footer from './components/Footer/Footer'
import Head from './components/Head/Head'
import ProjectCard from './components/ProjectCards/ProjectCard'
import { CorporateProject, Projects } from './projects'
import theme from './Theme/Main'
import Masonry from '@mui/lab/Masonry'
import './App.css'

interface AppProps extends LocalizeContextProps {

}

function App(props: AppProps) {

  console.log("App, man")

  return (
    <ApplicationBar>

      <main style={{ background: theme.black.light, zIndex: -2, paddingTop: 175 }}>
        <Box sx={{ pt: 8, pb: 6, justifyContent: 'center', width: '100%', marginBottom: 15 }} >
          <Head />
        </Box>

        <Container sx={{
          py: 8,
          backgroundColor: theme.black.dark,
          width: '100%',
          maxWidth: '100% !important',
          margin: 0,
          paddingTop: '120px'
        }}>
          <div className="corporateProject" style={{ width: '80%', margin: 'auto' }}>
            <ProjectCard isBig project={CorporateProject} />
          </div>
          <div id="scroll-target" style={{ position: 'relative', top: -100 }} />
          <Masonry className={"masonry"} columns={3} spacing={3} style={{ width: '80%', margin: 'auto' }}>
            {
              Projects.map((project) => <ProjectCard key={JSON.stringify(project)} project={project} />)
            }
          </Masonry>
        </Container>
      </main>

      {/* <Footer /> */}

    </ApplicationBar>
  )
}

export default withLocalize(App)