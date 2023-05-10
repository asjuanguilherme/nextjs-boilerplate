import { DefaultTheme } from 'styled-components'
import Sun from 'components/shared/icons/Sun'
import { colors } from 'styles/designSystemConfig'

const light: DefaultTheme = {
  name: 'light',
  title: 'Light',
  icon: <Sun />,
  colors: {
    title: '#1B1B1B',
    text: '#676767',
    main: colors,
    layers: {
      0: {
        background: '#FFFFFF',
        border: '#F3F3F3'
      },
      1: {
        background: '#FAFAFA',
        border: '#F5F5F5'
      },
      2: {
        background: '#F2F2F2',
        border: '#EAEAEA'
      },
      3: {
        background: '#EAEAEA',
        border: '#E3E3E3'
      }
    }
  }
}

export default light
