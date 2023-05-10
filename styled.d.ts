import 'styled-components'
import colors from 'styles/colors'

export type LayerIndex = 0 | 1 | 2 | 3

export type Colors = keyof typeof Colors

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    title: string
    icon: JSX.Element
    colors: {
      title: string
      text: string
      main: Record<MainColors, Record<'light' | 'normal' | 'dark', string>>
      layers: Record<
        LayerIndex,
        {
          background: string
          border: string
        }
      >
    }
  }
}
