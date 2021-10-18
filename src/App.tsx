import { LocalizeContextProps, Translate, withLocalize } from 'react-localize-redux'
import ApplicationBar from './components/ApplicationBar'



interface AppProps extends LocalizeContextProps {

}

function App(props: AppProps) {


  return (
    <ApplicationBar>
      {/* <CssBaseline /> Necessary? */}

      <Translate id={"stuff.common"}></Translate>
    </ApplicationBar>
  )
}

export default withLocalize(App)
