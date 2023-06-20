import { DefaultTheme } from 'styled-components'
import Moon from 'components/shared/icons/Moon'

const dark: DefaultTheme = {
  name: 'dark',
  title: 'Dark',
  icon: <Moon />,
  colors: {
    title: '#FFFFFF',
    text: '#FFFFFF90',
    main: {
      primary: {
        light: '#FDA177',
        normal: '#F47C46',
        dark: '#BC5B30'
      },
      error: {
        light: '#fca5a5',
        normal: '#ef4444',
        dark: '#b91c1c'
      },
      success: {
        light: '#86efac',
        normal: '#22c55e',
        dark: '#15803d'
      }
    },
    layers: {
      0: {
        background: '#000000',
        border: '#141414'
      },
      1: {
        background: '#191919',
        border: '#2E2E2E'
      },
      2: {
        background: '#303030',
        border: '#404040'
      },
      3: {
        background: '#444444',
        border: '#535353'
      }
    }
  }
}

export default dark
