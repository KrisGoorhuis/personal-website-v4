import { ThemeProvider } from '@mui/system'
import { LocalizeContextProps, LocalizeProvider, Translate, withLocalize } from 'react-localize-redux'
import ApplicationBar from './components/ApplicationBar'
import theme from './Theme/Main'
import translations, { translationPaths } from './translations/translations'
import { renderToStaticMarkup } from "react-dom/server"
import { Provider } from 'react-redux'
import store from './redux'



interface AppProps extends LocalizeContextProps {

}

function App(props: AppProps) {

  // props.initialize({
  //   languages: [
  //     { name: "English", code: "en" },
  //     { name: "French", code: "fr" }
  //   ],
  //   translation: translations,
  //   options: { renderToStaticMarkup }
  // })


  return (
    <Provider store={store}>
      <LocalizeProvider>
        <ThemeProvider theme={theme}>

          <ApplicationBar>
            {/* <CssBaseline /> Necessary? */}

            <Translate id={"stuff.common"}></Translate>
            text
          </ApplicationBar>

        </ThemeProvider>
      </LocalizeProvider>
    </Provider>
  )
}

export default withLocalize(App)
