import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import Appbars from '~/components/layouts/Appbars'
import theme from '~/theme'
import BoardBar from '~/components/layouts/Footer/BoardBar'
import FormDialog from './components/Dialog'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      {/* <Appbars /> */}
      {/* <BoardBar /> */}
      {/* <FormDialog /> */}
    </CssVarsProvider>
  )
}

export default App
