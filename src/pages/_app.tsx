import 'styles/css/fonts.css'

// Types
import type { AppProps } from 'next/app'
import AppGlobalProps from 'types/AppGlobalProps'

// Providers
import { ThemeProvider } from 'context/ThemeContext'

// Components
import Layout from 'components/layout'
import GlobalStyles from 'styles/GlobalStyles'

const App = ({ Component, pageProps }: AppProps<AppGlobalProps>) => {
  return (
    <>
      <ThemeProvider storedTheme={pageProps.storedTheme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
