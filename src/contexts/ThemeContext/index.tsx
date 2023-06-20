import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  DefaultTheme
} from 'styled-components'
import { DEFAULT_THEME, storeThemeStateToCookies } from './utils'
import themes, { ThemeName } from 'styles/themes'
import Head from 'next/head'

type ThemeContextProps = DefaultTheme & {
  themeToggle: () => void
}

type ThemeProviderProps = {
  children: ReactNode
  storedTheme: ThemeName
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('useTheme must be used within a ThemeProvider.')

  return context
}

export const ThemeProvider = ({
  children,
  storedTheme = DEFAULT_THEME
}: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>(storedTheme)

  const themeToggle = () => {
    const newTheme = selectedTheme === 'dark' ? 'light' : 'dark'
    setSelectedTheme(newTheme)
  }

  useEffect(() => {
    storeThemeStateToCookies(selectedTheme)
  }, [selectedTheme])

  return (
    <ThemeContext.Provider value={{ ...themes[selectedTheme], themeToggle }}>
      <Head>
        <meta
          name="theme-color"
          content={themes[selectedTheme].colors.layers[0].background}
        />
      </Head>
      <StyledComponentsThemeProvider theme={themes[selectedTheme]}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
