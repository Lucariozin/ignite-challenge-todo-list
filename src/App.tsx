import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@styles/global'
import { theme } from '@styles/theme'

import { TasksProvider } from '@contexts/Tasks'

import { Home } from '@pages/Home'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <TasksProvider>
        <Home />
      </TasksProvider>
    </ThemeProvider>
  )
}
