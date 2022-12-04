import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { purpleTheme } from './purpleTheme'

// eslint-disable-next-line react/prop-types
const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
