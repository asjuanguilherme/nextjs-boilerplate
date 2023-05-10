import { colors } from 'styles/designSystemConfig'
import { DefaultTheme } from 'styled-components'
import Moon from 'components/shared/icons/Moon'

const dark: DefaultTheme = {
  name: 'dark',
  title: 'Dark',
  icon: <Moon />,
  colors: {
    title: '#FFFFFF',
    text: '#FFFFFF90',
    main: colors,
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
