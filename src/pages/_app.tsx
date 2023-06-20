import 'styles/css/fonts.css'

// Types
import type { AppProps } from 'next/app'
import AppGlobalProps from 'types/AppGlobalProps'

// Providers
import { ThemeProvider } from 'contexts/ThemeContext'
import { ModalProvider } from 'contexts/ModalContext'

// Components
import Layout from 'components/layout'
import GlobalStyles from 'styles/GlobalStyles'

const App = ({ Component, pageProps }: AppProps<AppGlobalProps>) => {
  return (
    <>
      <ThemeProvider storedTheme={pageProps.storedTheme}>
        <GlobalStyles />
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default App
