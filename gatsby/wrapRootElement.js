import React from 'react'
import { ThemeProvider } from 'styled-components'

import light from '../src/styles/themes/light'

export function wrapRootElement ({ element, props }) {
  return <ThemeProvider theme={light}>{element}</ThemeProvider>
}
