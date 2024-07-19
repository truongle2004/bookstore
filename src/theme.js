import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  widthTextField: {
    width: 300
  },
  buttonStyle: {
    height: '44px',
    width: '220px'
  },
  heightTableAdmin: {
    height: 700
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#000'
        }
      }
    }
  }
})

export default theme
