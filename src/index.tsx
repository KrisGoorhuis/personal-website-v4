import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import theme from './Theme/Main'
import store from './redux'
import { renderToStaticMarkup } from 'react-dom/server'
import { initialize, LocalizeProvider } from 'react-localize-redux'
import translations from './translations/translations'


const thing = initialize({
  languages: [
    { name: "English", code: "en" },
    { name: "French", code: "fr" }
  ],
  translation: translations,
  options: { renderToStaticMarkup, defaultLanguage: 'en' }
})

console.log(thing)
store.dispatch(thing)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <ThemeProvider theme={theme}>

        {/* <CssBaseline />  */}

          <App />

        </ThemeProvider>
      </LocalizeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
